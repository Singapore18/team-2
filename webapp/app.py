# to run
# go to directory that this file is in
# ifconfig | grep inet to find device ip
# python3 app.py
# http://ip:port/end/points

from flask import Flask

from flask import render_template, jsonify, request
from flask_sqlalchemy import SQLAlchemy

import pymysql as MySQLdb


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:password@localhost/HIJOB'
db = SQLAlchemy(app)

from app import db

class pwid(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(255), unique=False, nullable=False)
    skill_1 = db.Column(db.String(255), unique=False, nullable=False)
    skill_2 = db.Column(db.String(255), unique=False, nullable=False)
    skill_3 = db.Column(db.String(255), unique=False, nullable=False)
    interest_1 = db.Column(db.String(255), unique=False, nullable=False)
    interest_2 = db.Column(db.String(255), unique=False, nullable=False)
    interest_3 = db.Column(db.String(255), unique=False, nullable=False)
    location = db.Column(db.String(255), unique=False, nullable=False)
    preferred_working_location = db.Column(db.String(255), unique=False, nullable=False)
    hired = db.Column(db.Boolean(), unique=False, nullable=True)
    is_full_time = db.Column(db.Boolean, unique=False, nullable=True)
    is_part_time = db.Column(db.Boolean, unique=False, nullable=True)

    def __repr__(self):
        return '<User %r>' % self.id

class employer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    company_name = db.Column(db.String(255), unique=False, nullable=False)
    address = db.Column(db.String(255), unique=False, nullable=False)
    job_title = db.Column(db.String(255), unique=False, nullable=False)
    industry = db.Column(db.String(255), unique=False, nullable=False)

class job(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    job_title = db.Column(db.String(255), unique=False, nullable=False)
    company_name = db.Column(db.String(255), unique=False, nullable=False)
    skills_required = db.Column(db.String(255), unique=False, nullable=False)
    industry = db.Column(db.String(255), unique=False, nullable=False)
    region = db.Column(db.String(255), unique=False, nullable=False)
    contact_email = db.Column(db.String(255), unique=False, nullable=False)
    is_full_time = db.Column(db.Boolean, unique=False, nullable=True)
    is_part_time = db.Column(db.Boolean, unique=False, nullable=True)

db.create_all()

############## ROUTES ###########

@app.route('/')
def hello():
    return "Hello!"

# API for adding job
@app.route('/addjob', methods=['POST', 'GET'])
def generateResume():
    req_data = request.get_json()

    from app import job
    job_id = int(random.uniform(1, 1000))
    job_title = job_data['jobTitle']
    company_name = job_data['company_name']
    skills_required = job_data['skill1']
    industry = job_data['industry']
    region = job_data['region']
    contact_email = job_data['contactemail']

    job_to_insert = job(id=job_id,job_title = job_title,company_name = company_name,skills_required = skills_required,industry = industry, region =region, contact_email = contact_email)
    db.session.add(job_to_insert)
    db.session.commit()

    print(req_data)
    return

# API for creating Resume
@app.route('/getresume')
@app.route('/getresume/<pwid>')
def generateResume(pwid=None):
    # query user with userid = pwid

    return
    #turn on tv


# API for adding user profile
@app.route('/survey')
@app.route('/survey/<pwid>', methods=['POST', 'GET'])
def survey(pwid=None):
    #get user survey info
    req_data = request.get_json()
    print(req_data)
    return req_data



@app.route('/index')
def index():
    return "Hello World!"

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0')
