### Setup and Usage

To run the data collection script:

1. Clone this repository to your local machine.
```commandline
git clone <url>
```
2. activate virtual environment 
```commandline
python -m venv venv
```
3. activate virtual environment, for this type
```commandline
.\venv\Scripts\activate
```
4. Install the required dependencies by running 
```commandline
pip install -r requirements.txt
```
5. copy the `.env.example` file and rename to `.env`
6. run the docker file with docker command
```commandline
docker compose up
```
(be sure that the venv activated... (it's new terminal you need to reactivate venv))
7. Open new terminal in project directory and make migrations with command
```commandline
python manage.py makemigrations
python manage.py migrate
```
8. Run the seeds  `python manage.py seed_data`.
9. Run the server with crons with command `python manage.py runserver`.