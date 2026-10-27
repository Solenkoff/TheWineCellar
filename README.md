# FurniShelter 🛋️

FurniShelter is my graduation project for the SoftUni ReactJS course. It's a small furniture-rescue platform where people can list pre-loved furniture and help it find a new home instead of ending up in the landfill.

Visitors can browse listings and read comments. After signing up, users can post their own furniture, manage their listings, and join the conversation.

## Live Demo

**Coming soon — I'll add the Cloudflare Pages link after deployment.**

## GitHub Repository

**Coming soon — FurniShelter repository here.**

## Tech Stack

- React and JavaScript
- Vite
- React Router
- Supabase Auth and PostgreSQL
- Supabase REST API (using `fetch`)
- Supabase Row Level Security (RLS)
- React Context API and custom hooks
- CSS Modules, Bootstrap and the Furni UI template
- React-Toastify for notifications

## Run Locally

1. Clone the repository and open the project folder.
2. Install dependencies with `npm install`.
3. Create a `.env.local` file in the project root with your own Supabase project details:

   ```env
   VITE_SUPABASE_REST_URL=your_supabase_rest_url
   VITE_SUPABASE_AUTH_URL=your_supabase_auth_url
   VITE_SUPABASE_PUBLISHABLE_API_KEY=your_supabase_publishable_key
   ```

4. Start the app with `npm run dev`.

For a production build, run `npm run build`.

---

# Functional Guide

## 1. Project Overview

**Application name:** FurniShelter  
**Category:** Furniture listings / community marketplace

The idea is simple: give furniture a second chance! People can share pieces they no longer need, while others can discover affordable, pre-loved furniture. Listings include the details needed to get in touch and arrange a rescue.

## 2. User Access & Permissions

**Guests** can visit Home, Catalog, Item Details, About, Contact, Login and Register. They can browse furniture listings and read the comments, but can't create listings or write comments.

**Logged-in users** can do everything guests can, plus:

- Create furniture listings.
- Edit and delete **their own** listings.
- Add comments to listings.
- Edit and delete **their own** comments.
- Log out.

Users can't edit or delete someone else's content. The interface checks ownership, and Supabase RLS protects the data on the backend.

## 3. Authentication & Session Handling

FurniShelter uses **Supabase Authentication** for registration, login and logout.

- On startup, `AuthProvider` reads the saved authentication data from `localStorage`.
- `AuthContext` shares the current user, access token and login status across the app.
- After a successful login or registration, the session is saved and the user is redirected to Home.
- On logout, the local session is cleared, even if the remote logout request fails.
- Refreshing the page restores the saved session from `localStorage`.

The `useAuth` custom hook makes it easy for components to access this information. Token refresh isn't implemented, so an expired session may require logging in again.

## 4. Routing Structure

React Router handles navigation without full page reloads.

| Route | Page | Access |
| --- | --- | --- |
| `/` | Home | Public |
| `/catalog` | Furniture catalog | Public |
| `/items/:itemId` | Listing details and comments | Public |
| `/about` | About | Public |
| `/contact` | Contact | Public |
| `/items/add` | Create listing | Logged-in users |
| `/items/:itemId/edit` | Edit listing | Listing owner |
| `/logout` | Logout | Logged-in users |
| `/login` | Login | Guests |
| `/register` | Register | Guests |

`AuthGuard` redirects guests away from protected pages, while `GuestGuard` redirects logged-in users away from Login and Register. These guards use nested routes and React Router's `<Outlet />`.

The `:itemId` parameter is read with `useParams()` to load the correct listing. The Edit page also checks that the current user owns it.

## 5. List → Details Flow

The **Home** page shows the three newest furniture listings. The **Catalog** shows available listings as cards, with an image and basic item information. There isn't a separate search or filter feature.

Clicking a listing opens `/items/:itemId`. The details page uses the ID from the URL to fetch that specific item from Supabase. It displays the title, image, price, category, description, listing date, status and comments.

Navigation uses React Router's `Link` and `useNavigate()`.

## 6. Data Source & Backend

The backend is **Supabase**, which provides a hosted PostgreSQL database and authentication. There's no separate Express or Node.js server.

The main database tables are:

- `items` — furniture listings, including their owner IDs.
- `comments` — comments linked to listings and their authors.

The frontend communicates with Supabase through a reusable `request.js` helper built around the native `fetch()` API. `itemApi` and `commentApi` keep the database requests organized. Supabase RLS controls who can create, change and delete records.

Furniture images are provided through image URLs rather than uploaded files.

## 7. Data Operations (CRUD)

### Furniture listings

- **Create (POST):** A logged-in user fills in the Add Listing form with a title, category, price, image URL and description. The listing is saved in Supabase.
- **Read (GET):** Listings are fetched for Home, Catalog and Item Details.
- **Update (PATCH):** The owner opens Edit, changes the pre-filled form and saves. The app returns to the listing details page.
- **Delete (DELETE):** The owner clicks Delete and confirms the action. After a successful request, the app redirects to Catalog.

### Comments

Comments also support full CRUD. Logged-in users can post comments, and authors can edit or delete their own. The comment list uses `useReducer` to update the displayed comments after successful operations, without needing to reload the whole page.

## 8. Forms & Validation

**Forms used:** Register, Login, Add Listing, Edit Listing, Add Comment and Edit Comment.

Some examples of validation:

- **Registration:** Username, email, password and confirmation are required; the two passwords must match.
- **Listing title and description:** Can't be empty or contain only spaces.
- **Price:** Required and can't be negative.
- **Category and image URL:** Required when creating or editing a listing.
- **Comments:** Can't be empty or contain only spaces.

Invalid input shows a Toastify message. The forms also handle errors returned by Supabase. There isn't a separate custom email-format or image-URL-format validator.

## 9. React-Specific Techniques

- **`useState`** manages form values, loading states and buttons such as Add or Save.
- **`useEffect`** fetches listings and comments when pages load or their IDs change.
- **`useReducer`** manages adding, editing, removing and loading comments.
- **`useContext` / `useAuth`** provide shared authentication information.
- **`useParams` and `useNavigate`** handle listing IDs and navigation.
- **`useRef`** is used in the testimonials slider.
- **Custom `usePersistedState`** keeps authentication data in `localStorage`.

For example, Home uses an `AbortController` in `useEffect` to cancel its listings request when the component unmounts. Other data-loading components guard against outdated responses when the user navigates away.

Styling combines the adapted **Furni** template, Bootstrap classes and **CSS Modules** for component-specific styles.

## 10. Typical User Flow

1. Someone visits FurniShelter and browses furniture on Home or Catalog.
2. They open a listing to see its photos, description and comments.
3. They register or log in to join in.
4. They add their own furniture listing, or comment on an existing one.
5. Later, they can edit or delete their own listings and comments.
6. They log out when they're done.

## 11. Error & Edge Case Handling

- **Authentication:** Missing fields, mismatched passwords and failed login/registration requests show error toasts.
- **Network and database requests:** Failed requests show Toastify errors instead of crashing the app.
- **Loading:** Catalog, Item Details, Edit Listing and Comments handle data loading; failed loads show a message or redirect when appropriate.
- **Empty data:** Catalog and Comments show friendly messages when there is nothing to display.
- **Missing listings:** Invalid or missing item records are handled with an error notification and redirect.
- **Permissions:** Route guards restrict private pages; ownership checks and Supabase RLS prevent unauthorized changes.
- **Repeated clicks:** Create, Edit and Delete actions disable buttons while requests are in progress.

## Deployment

The React frontend is deployed on **Cloudflare Pages**. Supabase hosts the backend and database.

**Live URL:** I'llk add it after deployment.

## UI Template Credit

The design started with the **Furni** HTML furniture template, adapted into React components and customized by Solenkoff for FurniShelter.
