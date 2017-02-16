#!/usr/bin/env python
# -*-coding:utf-8 -*-

from django.conf.urls import patterns, url
from web.views import IndexPageView, ProductLbPageView, ProductServerPageView, SolutionPageView

urlpatterns = [
    url(r'^index$', IndexPageView.as_view()),
    url(r'^product/lb$', ProductLbPageView.as_view()),
    url(r'^product/server$', ProductServerPageView.as_view()),
    url(r'^solution$', SolutionPageView.as_view()),

]
