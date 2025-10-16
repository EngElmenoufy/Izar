import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  footerItems = [
    {
      header: 'Get to Know Us',
      links: [
        'About Us',
        'How It Works',
        'Trade-in',
        'Help Center',
        'Contact Us',
      ],
    },
    {
      header: 'Info Hub',
      links: [
        'Shipping',
        'Returns and Refunds',
        'Sellers: Register to Sell',
        'Seller Panel',
      ],
    },
    {
      header: 'Our Policies',
      links: ['Terms of Service', 'Limited Warranty', 'Privacy', 'Cookies'],
    },
  ];
}
