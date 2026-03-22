from flask import Flask, render_template, request, redirect, url_for, session
import sqlite3

app = Flask(__name__)
app.secret_key = "maktab123"

# Database yaratish (birinchi marta ishga tushganda)
def init_db():
    conn = sqlite3.connect('teachers.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS teachers
                 (id INTEGER PRIMARY KEY AUTOINCREMENT,
                  name TEXT, subject TEXT, result TEXT, level TEXT, image TEXT)''')
    conn.commit()
    conn.close()

init_db()

# Home page
@app.route("/")
def home():
    return render_template("index.html")

# API: teachers ma'lumotini olish
@app.route("/api/teachers")
def get_teachers():
    conn = sqlite3.connect('teachers.db')
    c = conn.cursor()
    c.execute("SELECT name, subject, result, level, image FROM teachers")
    teachers = [{"name": row[0], "subject": row[1], "result": row[2], "level": row[3], "image": row[4]} for row in c.fetchall()]
    conn.close()
    return {"teachers": teachers}

if name == "__main__":
    app.run(debug=True)