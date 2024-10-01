export const color = [
    "White",
    "Black",
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Purple",
    "Orange",
    "Brown",
    "Pink",
    "Gray",
    "Cyan",
    "Magenta",
];

export const filters = [
    {
        id: "color",
        name: "Color",
        options: [
            { value: "black", label: "Black" },
            { value: "white", label: "White" },
            { value: "red", label: "Red" },
            { value: "blue", label: "Blue" },
            { value: "green", label: "Green" },
            { value: "yellow", label: "Yellow" },
            { value: "purple", label: "Purple" },
            { value: "orange", label: "Orange" },
            { value: "brown", label: "Brown" },
            { value: "pink", label: "Pink" },
            { value: "gray", label: "Gray" },
        ]
    },
    {
        id: "size",
        name: "Size",
        options: [
            { value: "s", label: "S" },
            { value: "m", label: "M" },
            { value: "l", label: "L" },
            { value: "xl", label: "XL" },
            { value: "xxl", label: "XXL" },
        ]
    }
];
export const singleFilter = [
    {
        id: "price",
        name: "Price",
        options: [
            { value: "159-399", label: "₹159 To ₹399" },
            { value: "399-999", label: "₹399 To ₹999" },
            { value: "999-1999", label: "₹999 To ₹1999" },
            { value: "1999-2999", label: "₹1999 To ₹2999" },
            { value: "2999-3999", label: "₹2999 To ₹3999" },
        ],
    },
    {
        id: "discount",
        name: "Discount Range",
        options: [
            { value: "10", label: "10% And Above" },
            { value: "20", label: "20% And Above" },
            { value: "30", label: "30% And Above" },
            { value: "40", label: "40% And Above" },
            { value: "50", label: "50% And Above" },
            { value: "60", label: "60% And Above" },
            { value: "70", label: "70% And Above" },
            { value: "80", label: "80% And Above" },
        ]
    },
    {
        id: "stock",
        name: "Availability",
        options: [
            { value: "in_stock", label: "In Stock" },
            { value: "out_of_stock", label: "Out Of Stock" },
        ]
    }
]