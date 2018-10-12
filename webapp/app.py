# to run
# go to directory that this file is in
# ifconfig | grep inet to find device ip
# python3 app.py
# http://ip:port/end/points

from flask import Flask
from flask import render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def hello():
    return "Hello!"

@app.route('/resume')
@app.route('/resume/<pwid>')
def doservice(pwid=None):
    return render_template('resume.html',service=service)
    #turn on tv

@app.route('/addjob', methods=['POST','GET'])
def generateResume():
    req_data = request.get_json()
    print(req_data)
    return

@app.route('/index')
def index():
    return "Hello World!"

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0')
