type ParcelHistory = {
  message: string;
  location: string;
  date: string;
  time: string;
}

type Parcel = {
  id: string;
  logo: string;
  status: 'Delivered' | 'In Transit';
  from: string;
  to: string;
  days: string;
  type: string;
  weight: string;
  history: ParcelHistory[];
}

export const parcels_data: Parcel[] = [
  {
    id: 'RD 4242 6352',
    logo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogodownload.org%2Fwp-content%2Fuploads%2F2015%2F12%2Fdhl-logo-0-1.png&f=1&nofb=1&ipt=b3b6a1b8e191950a4a17a243882827a6f1b006712992ef74bd45f69116352ac1&ipo=images',
    status: 'Delivered',
    from: 'America, USA',
    to: 'Nigeria, Africa', 
    days: '5days',
    type: 'Transit',
    weight: '5kg',
    history: [
      {
        message: "Accepted by USP Express Plus",
        location: 'America, USA',
        date: '12th June, 2021',
        time: '12:00pm',
      },
      {
        message: "Arrived at America, USA",
        location: 'Nigeria, Africa',
        date: '15th June, 2021', 
        time: '12:00pm',
      },
    ],
  },
  {
    id: 'FX 8876 1234',
    logo: 'https://logos-world.net/wp-content/uploads/2020/04/FedEx-Logo-700x394.png',
    status: 'In Transit',
    from: 'London, UK',
    to: 'Paris, France',
    days: '2days',
    type: 'Express',
    weight: '2kg',
    history: [
      {
        message: "Package received at FedEx facility",
        location: 'London, UK',
        date: '20th March, 2024',
        time: '9:30am',
      },
      {
        message: "In transit to destination",
        location: 'Dover, UK',
        date: '21st March, 2024',
        time: '2:15pm',
      },
    ],
  },
  {
    id: 'UP 9923 7700',
    logo: 'https://1000logos.net/wp-content/uploads/2021/04/UPS-logo-500x281.png',
    status: 'In Transit',
    from: 'Tokyo, Japan',
    to: 'Seoul, South Korea',
    days: '3days',
    type: 'Standard',
    weight: '1.5kg',
    history: [
      {
        message: "Picked up by courier",
        location: 'Tokyo, Japan',
        date: '18th March, 2024',
        time: '11:45am',
      },
      {
        message: "Departed sorting facility",
        location: 'Tokyo, Japan',
        date: '19th March, 2024',
        time: '3:20pm',
      },
    ],
  }
];
