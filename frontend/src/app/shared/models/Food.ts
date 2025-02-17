export class Food{
    id!:string;
    name!: string;
    price!: number;
    tags?: string[]; //optional is ?
    favorite!: boolean;
    stars!: number;
    imageUrl!: string;
    origins!:string[];
    cookTime!: string;
}