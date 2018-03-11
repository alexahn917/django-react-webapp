from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class Hello(APIView):

    def get(self, request, format=None):
        data = {'msg': 'Hello from both React & Django!'}
        print(data)
        return Response(data)

    def post(self, request, format=None):
        data = {'msg': 'post response!'}
        return Response(data)

class Query(APIView):

    def get(self, request, format=None):
        return Response('ok')

    def post(self, request, format=None):
        msg = 'we got your query: %s' % request.data['query']
        return Response(msg)
