from django.shortcuts import render
from rest_framework import viewsets, permissions  # the use of viewsets
from .serializers import * #get all serializers
from .models import *   #get all models
from rest_framework.response import Response
# Create your views here.

class CountryViewset(viewsets.ViewSet):
    permissions_classes = [permissions.AllowAny] # giving permission to whos gonna access the site
    queryset = Country.objects.all()
    serializer_class = CountrySerializer

    def list(self, request):
        queryset = Country.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
    
class LeagueViewset(viewsets.ViewSet):
    permissions_classes = [permissions.AllowAny] # giving permission to whos gonna access the site
    queryset = League.objects.all()
    serializer_class = LeagueSerializer

    def list(self, request):
        queryset = League.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
    
class CharacteristicViewset(viewsets.ViewSet):
    permissions_classes = [permissions.AllowAny] # giving permission to whos gonna access the site
    queryset = Characteristic.objects.all()
    serializer_class = CharacteristicSerializer

    def list(self, request):
        queryset = Characteristic.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)


class FootballClubViewset(viewsets.ViewSet):
    permissions_classes = [permissions.AllowAny]
    queryset = FootballClub.objects.all()
    serializer_class = FootballClubSerializer

#this function ensures that the data is created and saved.
    def create(self,request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save() 
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)  