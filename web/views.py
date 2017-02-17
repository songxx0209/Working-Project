# Create your views here.
from django.views.generic import TemplateView

class IndexPageView(TemplateView):
    template_name = 'web_index.html'


class ProductLbPageView(TemplateView):
    template_name = 'web_product_lb.html'



class ProductServerPageView(TemplateView):
    template_name = 'web_product_server.html'

class SolutionPageView(TemplateView):
    template_name = 'web_solution.html'


class PricePageView(TemplateView):
    template_name = 'web_price.html'