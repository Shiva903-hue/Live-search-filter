# 🔍 Live Search Filter Using JavaScript

This is a simple and clean **Live Search Filter** project built using **HTML, CSS, and JavaScript**.

### 📽️ Quick Demo
As the user types in the search box, the list below filters in real-time to show only matching items.

---

## 🚀 How It Works

1. **Grab all HTML elements** needed: input box and list items.
2. **Add event listener** to the input box for `input` events.
3. **When user types**, the event triggers a callback function.
4. Get the current input text and convert it to **lowercase** to make the search case-insensitive.
5. Use `Array.from()` to convert list items into an array.
6. Loop through each item using `.forEach()`.
7. For each item:
   - Convert its text to lowercase.
   - Check if it **includes** the user's search string using `.includes()`.
   - If it matches → show the item.
   - If not → hide the item.

---

## 📁 Files

- `index.html` – Basic structure with input and list.
- `script.js` – JavaScript for live filtering logic.

---

## 🧠 Key JavaScript Concepts Used

- `getElementById()`
- `getElementsByTagName()`
- `addEventListener()`
- `Array.from()`
- `.forEach()`
- `.includes()`
- `.toLowerCase()`

---

## 💡 Perfect For:

- JavaScript beginners
- Mini web projects
- Resume projects or portfolio
- YouTube Shorts explanations

---
subscribe for my Youtube Chanel (https://your-live-url.com)


## 🙌 Author

**Shivam Waghmare**  
A passionate Web Developer 🚀


---

