import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class BikesService {

  constructor() { }
  private bikes:Product[]=[
    
    {
      productTitle:"Machine Learning using python",
      description:"Machine learning is an application of artificial intelligence (AI) that provides systems the ability to automatically learn and improve from experience without being explicitly programmed. ",
      productImage:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera/topics/ml/large-icon.png?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF&q=25"
      },
      {
      productTitle:"Financial Markets",
      description:"This course aims to develop students understanding of the basic principles of financial markets and provides an introduction how assets are valued and traded in those markets.",
      productImage:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/51/51d7604aba11e7ae3525d9720463e7/Shiller_FinancialMarkets_New.png?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF&q=25"
      },
      
      {
      productTitle:"Psychological First Aid",
      description:"Supporting Yourself and Others During COVID-19 is an online only course designed to help individuals build resilience and support themselves and lend support to others during and following the COVID-19 outbreak.",
      productImage:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/de/e250c02c7f11e4a56e09598f8b6c89/PFA.png?auto=format%2Ccompress&dpr=1&w=150&h=150&q=25&fit=fill&bg=FFF"
      },
      
      {
      productTitle:"English for Career Development",
      description:"This course is designed for non-native English speakers who are interested in advancing their careers in the global marketplace.",
      productImage:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/bb/62e6a0120b11e6bc32c330496bd91a/Career-Development.jpg?auto=format%2Ccompress&dpr=1&w=150&h=150&q=25&fit=fill&bg=FFF"
      },
      
      {
      productTitle:"Global Diplomacy – Diplomacy in the Modern World",
      description:"The Global Diplomacy course is a unique offering to the MOOC environment. ... The ability to demonstrate a critical understanding of the nature and development of global diplomacy,",
      productImage:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/db/35eec0c42f11e59a5387719dace7f6/shutterstock_176614775.jpg?auto=format%2Ccompress&dpr=1&w=150&h=150&q=25&fit=fill&bg=FFF"
      },
      
      {
      productTitle:"Introduction to Calculus",
      description:"Calculus concepts explored include limits and continuity, derivatives, definite integrals, exponential and logarithmic functions, trigonometric functions, and techniques of integration.",
      productImage:"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/8f/02ce60e08811e8bbf6679b96d45c3d/CalculusSydney_sml.fw.png?auto=format%2Ccompress&dpr=1&w=150&h=150&q=25&fit=fill&bg=FFF"
      }
  ];
  getBikesData():Product[]{
    return this.bikes;
  }
}
