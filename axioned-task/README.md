 Blog Page - React Project

 🚀 Project Overview
This is a **React-based Blog Page** that fetches and displays blog posts from the JSONPlaceholder API. The application includes:
- **Pagination** ✅
- **Search Functionality** ✅
- **Filtering & Sorting** (by Title and ID) ✅
- **Responsive UI using Tailwind CSS** ✅

 🛠️ Tech Stack
- **React.js** (for UI components)
- **Axios** (for fetching data)
- **Tailwind CSS** (for styling)
- **JSONPlaceholder API** (dummy data)

---

 📌 Features Implemented
 1️⃣ Data Fetching
- Used `useEffect` to fetch data from JSONPlaceholder API
- Managed loading state during API calls

 2️⃣ Pagination
- Dynamically displays page numbers
- Highlights the current page
- Handles "Previous" and "Next" navigation

 3️⃣ Search Functionality
- Allows users to search for blog posts by **title** or **body**
- Filters posts **dynamically as user types**

 4️⃣ Sorting Feature
- Users can **sort posts** by:
  - **Title (A-Z, Z-A)**
  - **ID (Ascending, Descending)**
- Uses `sort()` to arrange data efficiently

 5️⃣ Filter & Dropdown
- Sorting dropdown integrated with `onChange` event
- Controlled via **React state**

---

 📥 Installation & Running Locally

1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-username/blog-page.git
   cd blog-page
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Start the Development Server**
   ```sh
   npm run dev
   ```

4. **Open in Browser**
   - Visit **`http://localhost:5173`** (or the port Vite assigns)

---

 🔗 API Used
- **[JSONPlaceholder](https://jsonplaceholder.typicode.com/posts)** (Dummy Blog Data)


---

 🤝 Contributing
Feel free to **fork the repo** and submit pull requests for improvements! 🚀

---

 📝 License
This project is **open-source** under the MIT License.

---

🔥 **Made with ❤️ by Dakhani Usman**

