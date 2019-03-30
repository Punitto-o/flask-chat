import os

from flask import Flask, render_template, request
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.secret_key = os.urandom(24)
socketio = SocketIO(app)


@app.route("/")
def index():
    return render_template('index.html')

@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

#@app.route('/channel')
#def channel():
	#return render_template('channel.html')

@app.route('/create-channel')
def create_channel():
	return render_template('create_channel.html')

@app.route('/<chname>')
def channel(chname):
	return render_template('channel.html', chname=chname)

@socketio.on('user arrival')
def arrival(data):
	print('User arrived:')
	print(data)
	username = data['username']
	path = data['path']
	emit("announce arrival", {"username": username, "path": path}, broadcast=True)

@socketio.on('send message')
def message(data):
	print('Message arrived: ')
	print(data)
	message = data['message']
	user = data['user']
	path = data['path']
	emit("announce message", {"message": message, "user": user, "path": path}, broadcast=True)