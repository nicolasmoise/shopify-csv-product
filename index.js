import fs from 'fs';
import { stringify } from 'csv-stringify';
import crypto from 'crypto';

// Generates a lot of shopify products to be imported as a csv file

const columns = [
    'Handle',
    'Title',
    'Body (HTML)',
    'Vendor',
    'Product Category',
    'Type',
    'Tags',
    'Published',
    'Option1 Name',
    'Option1 Value',
    'Option2 Name',
    'Option2 Value',
    'Option3 Name',
    'Option3 Value',
    'Variant SKU',
    'Variant Grams',
    'Variant Inventory Tracker',
    'Variant Inventory Qty',
    'Variant Inventory Policy',
    'Variant Fulfillment Service',
    'Variant Price',
    'Variant Compare At Price',
    'Variant Requires Shipping',
    'Variant Taxable',
    'Variant Barcode',
    'Image Src',
    'Image Position',
    'Image Alt Text',
    'Gift Card',
    'SEO Title',
    'SEO Description',
    'Google Shopping / Google Product Category',
    'Google Shopping / Gender',
    'Google Shopping / Age Group',
    'Google Shopping / MPN',
    'Google Shopping / AdWords Grouping',
    'Google Shopping / AdWords Labels',
    'Google Shopping / Condition',
    'Google Shopping / Custom Product',
    'Google Shopping / Custom Label 0',
    'Google Shopping / Custom Label 1',
    'Google Shopping / Custom Label 2',
    'Google Shopping / Custom Label 3',
    'Google Shopping / Custom Label 4',
    'Variant Image',
    'Variant Weight Unit',
    'Variant Tax Code',
    'Cost per item',
    'Price / International',
    'Compare At Price / International',
    'Status'
  ];

const someData = [columns];

const row = [
    '',
    'Acme',
    'Apparel & Accessories > Clothing',
    'Shirts',
    'mens t-shirt example',
    'TRUE',
    'Title',
    'Lithograph - Height: 9" x Width: 12"',
    '',
    '',
    '',
    '',
    '',
    '3629',
    '',
    '',
    'deny',
    'manual',
    '25',
    '',
    'TRUE',
    'TRUE',
    '',
    'https://burst.shopifycdn.com/photos/green-t-shirt.jpg?width=5000',
    '1',
    '',
    'FALSE',
    'Our awesome T-shirt in 70 characters or less.',
    'A great description of your products in 320 characters or less',
    'Apparel & Accessories > Clothing',
    'Unisex',
    'Adult',
    '7X8ABC910',
    'T-shirts',
    'cotton, pre-shrunk',
    'used',
    'FALSE',
    '',
    '',
    '',
    '',
    '',
    '',
    'g',
    '',
    '',
    '',
    '',
    'active'
];

const numberOfProducts = 20000;

for (let i = 0; i < numberOfProducts ; i++) {
    let id = crypto.randomBytes(7).toString('hex');
    someData.push([`product-handle-${id}`, `T-Shirt ${id}`, ...row]);
}

stringify(someData, {
    header: false
}, function (err, output) {
    console.log(err);
    fs.writeFile('./shopify-test-product-data.csv', output, (err) => {
        console.log(err);
    });
})