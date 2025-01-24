from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Task
from .serializers import TaskSerializer

# TaskList provides an API endpoint to handle HTTP requests for the Task model
class TaskList(APIView):
    # To retrieve all tasks stored in the database.
    # If you call this endpoint (e.g., GET /api/tasks/), you will receive a JSON array containing all the tasks in the database.
    def get(self, request):
        tasks = Task.objects.all()  #fetch tasks
        serializer = TaskSerializer(tasks, many=True) # convert multiple tasks to json
        return Response(serializer.data) #serialized JSON data is sent back as an HTTP response with a 200 OK status

    # To create a new task in the database.
    def post(self, request):
        serializer = TaskSerializer(data=request.data) # converts the JSON data from the request into a Python object
        # This checks if the provided data matches the rules defined in the TaskSerializer and the Task model (e.g., required fields, correct data types, etc.)
        if serializer.is_valid():
            serializer.save() #Save the task if valid:
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
