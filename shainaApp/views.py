from django.shortcuts import render
from django.views.generic import TemplateView
from django.http import HttpResponseRedirect




class HomePageView(TemplateView):
    template_name = "homePage.html"
