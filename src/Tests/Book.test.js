import React from 'react';
import ReactDOM from 'react-dom';
import Book from '../Book/Book';

const aBook = {
    "kind": "books#volume",
    "id": "awRSDQAAQBAJ",
    "etag": "fBebBqzAXkA",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/awRSDQAAQBAJ",
    "volumeInfo": {
     "title": "Life and Death: Twilight Reimagined",
     "authors": [
      "Stephenie Meyer"
     ],
     "publisher": "Little, Brown Books for Young Readers",
     "publishedDate": "2016-11-01",
     "description": "For the first time in a stand-alone edition comes Stephenie Meyer's Life and Death, a compelling reimagining of the iconic love story that will surprise and enthrall readers. There are two sides to every story.... You know Bella and Edward, now get to know Beau and Edythe. When Beaufort Swan moves to the gloomy town of Forks and meets the mysterious, alluring Edythe Cullen, his life takes a thrilling and terrifying turn. With her porcelain skin, golden eyes, mesmerizing voice, and supernatural gifts, Edythe is both irresistible and enigmatic. What Beau doesn't realize is the closer he gets to her, the more he is putting himself and those around him at risk. And, it might be too late to turn back.... With a foreword and afterword by Stephenie Meyer, this compelling reimagining of the iconic love story is a must-read for Twilight fans everywhere. Twilight has enraptured millions of readers since its first publication in 2005 and has become a modern classic, redefining genres within young adult literature and inspiring a phenomenon that has had readers yearning for more. The novel was a #1 New York Times bestseller, a #1 USA Today bestseller, a Time magazine Best Young Adult Book of All-Time, an NPR Best Ever Teen Novel, and a New York Times Editor's Choice. The Twilight Saga, which also includes New Moon, Eclipse, Breaking Dawn, The Short Second Life of Bree Tanner: An Eclipse Novella, and The Twilight Saga: The Official Illustrated Guide, has sold nearly 155 million copies worldwide.",
     "industryIdentifiers": [
      {
       "type": "ISBN_13",
       "identifier": "9780316557955"
      },
      {
       "type": "ISBN_10",
       "identifier": "0316557951"
      }
     ],
     "readingModes": {
      "text": true,
      "image": false
     },
     "pageCount": 400,
     "printType": "BOOK",
     "categories": [
      "Young Adult Fiction"
     ],
     "averageRating": 4.0,
     "ratingsCount": 5,
     "maturityRating": "NOT_MATURE",
     "allowAnonLogging": true,
     "contentVersion": "1.1.1.0.preview.2",
     "panelizationSummary": {
      "containsEpubBubbles": false,
      "containsImageBubbles": false
     },
     "imageLinks": {
      "smallThumbnail": "http://books.google.com/books/content?id=awRSDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=awRSDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
     },
     "language": "en",
     "previewLink": "http://books.google.com/books?id=awRSDQAAQBAJ&printsec=frontcover&dq=Twilight&hl=&cd=1&source=gbs_api",
     "infoLink": "https://play.google.com/store/books/details?id=awRSDQAAQBAJ&source=gbs_api",
     "canonicalVolumeLink": "https://market.android.com/details?id=book-awRSDQAAQBAJ"
    },
    "saleInfo": {
     "country": "US",
     "saleability": "FOR_SALE",
     "isEbook": true,
     "listPrice": {
      "amount": 9.99,
      "currencyCode": "USD"
     },
     "retailPrice": {
      "amount": 9.99,
      "currencyCode": "USD"
     },
     "buyLink": "https://play.google.com/store/books/details?id=awRSDQAAQBAJ&rdid=book-awRSDQAAQBAJ&rdot=1&source=gbs_api",
     "offers": [
      {
       "finskyOfferType": 1,
       "listPrice": {
        "amountInMicros": 9990000.0,
        "currencyCode": "USD"
       },
       "retailPrice": {
        "amountInMicros": 9990000.0,
        "currencyCode": "USD"
       },
       "giftable": true
      }
     ]
    },
    "accessInfo": {
     "country": "US",
     "viewability": "PARTIAL",
     "embeddable": true,
     "publicDomain": false,
     "textToSpeechPermission": "ALLOWED",
     "epub": {
      "isAvailable": true,
      "acsTokenLink": "http://books.google.com/books/download/Life_and_Death_Twilight_Reimagined-sample-epub.acsm?id=awRSDQAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
     },
     "pdf": {
      "isAvailable": false
     },
     "webReaderLink": "http://play.google.com/books/reader?id=awRSDQAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
     "accessViewStatus": "SAMPLE",
     "quoteSharingAllowed": false
    },
    "searchInfo": {
     "textSnippet": "For fans of the worldwide phenomenon Twilight comes Stephenie Meyer&#39;s Life and Death, a compelling reimagining of the iconic love story that will surprise and enthrall readers."
    }
   }

describe("App Component ", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Book 
                        book={ aBook }/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });  
});
