# Vidita Singh's Portfolio

A modern, interactive developer portfolio built with **React**, **Vite**, and **Tailwind CSS**.  
Showcasing projects, skills, education, and contact information with 3D and animated UI elements.

---

## 🚀 Features

- **Fast Vite-powered React app** with HMR
- **Tailwind CSS** for rapid, responsive styling
- **Animated sections** using GSAP
- **3D models** with [react-three-fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction) and [@react-three/drei](https://github.com/pmndrs/drei)
- **Contact form** with [EmailJS](https://www.emailjs.com/)
- **Responsive design** for all devices
- **Downloadable resume** and social links
- **Section navigation** with smooth scrolling

---

## 🛠️ Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GSAP](https://greensock.com/gsap/)
- [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- [@react-three/drei](https://github.com/pmndrs/drei)
- [EmailJS](https://www.emailjs.com/)

---

## 📦 Project Structure

```
portfolio/
├── public/
│   ├── images/           # Static images and icons
│   └── models/           # 3D model files (GLB/GLTF)
├── src/
│   ├── assets/           # Additional assets
│   ├── components/       # Reusable React components
│   ├── constants/        # Data/constants (nav, skills, etc.)
│   ├── sections/         # Main page sections (Hero, About, Contact, etc.)
│   ├── index.css         # Tailwind and custom CSS
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── .env                  # Environment variables (EmailJS keys)
├── package.json
├── vite.config.js
└── README.md
```

---

## 🖥️ Local Development

### 1. **Clone the repository**
```sh
git clone https://github.com/viditasingh/portfolio.git
cd portfolio
```

### 2. **Install dependencies**
```sh
npm install
```

### 3. **Set up environment variables**

Copy `.env.sample` to `.env` and fill in your [EmailJS](https://www.emailjs.com/) credentials:
```
VITE_APP_EMAILJS_SERVICE_ID='your_service_id'
VITE_APP_EMAILJS_TEMPLATE_ID='your_template_id'
VITE_APP_EMAILJS_PUBLIC_KEY='your_public_key'
```

### 4. **Run the development server**
```sh
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🏗️ Build for Production

```sh
npm run build
```
The output will be in the `dist/` folder.

---

## ✨ Customization

- **Update your information:**  
  Edit content in `src/constants/index.js` and section files in `src/sections/`.
- **Add/replace images:**  
  Place new images in `public/images/`.
- **Change 3D models:**  
  Replace or add GLB/GLTF files in `public/models/` and update model paths in `src/constants/index.js`.

---

## 📝 Credits

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GSAP](https://greensock.com/gsap/)
- [react-three-fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- [@react-three/drei](https://github.com/pmndrs/drei)
- [EmailJS](https://www.emailjs.com/)

---

## 📄 License

This project is for personal and educational use.  
Feel free to fork and adapt for your own portfolio!

---

## 🙋‍♀️ Contact

- [LinkedIn](https://linkedin.com/in/vidita-singh)
- [GitHub](https://github.com/viditasingh)