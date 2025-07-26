export interface Course {
    id: number;
    title: string;
    description: string;
    price: number;
    date?: string; // Optional date field
    img?: string; // Optional image field
    soldOut?: boolean; // Optional field to indicate if the course is sold out
    onSale?: boolean; // Optional field to indicate if the course is on sale
}
