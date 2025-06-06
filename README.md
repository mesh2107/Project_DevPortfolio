# DevPortfolio

DevPortfolio is a platform where **developers** and **companies** can create and publish their portfolios. It allows developers to explore company portfolios for job opportunities, and likewise, companies can view developer portfolios to find suitable candidates.

---

## 🔍 Features

- Developer and Company login/signup
- Upload and manage personal/company portfolios
- View other users' portfolios (developers or companies)
- Clean and user-friendly interface
- Database-backed (SQLite) user data and portfolios

---

## 💻 Tech Stack

### 🔧 Backend:
- Python 3.x
- Django Framework
- SQLite Database

### 🎨 Frontend:
- HTML5
- CSS3
- JavaScript

---

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1. Clone the Repository
git clone https://github.com/mesh2107/Project_DevPortfolio.git
cd Project_DevPortfolio

2. Create and Activate a Virtual Environment (Recommended)
python -m venv env
# On Windows
env\Scripts\activate
# On macOS/Linux
source env/bin/activate

3. Install Dependencies
pip install -r requirements.txt

4. Apply Migrations
python manage.py migrate
5. Collect Static Files
python manage.py collectstatic --noinput
6. Run the Development Server
python manage.py runserver
