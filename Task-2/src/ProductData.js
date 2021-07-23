const ProductData = {
    title: 'Food Corner - Never Get a Test Like This',
    description: 'A gathering of your favourite people, great food, refreshing drinks and lots of laughter, that’s exactly how a weekend should be. So come here and enjoy with your favourite people ',
    colorOptions: [
        {
            styleName: 'dish-1',
            imageUrl: '/dish-1.jpg'
        },
        {
            styleName: 'Red Strap',
            imageUrl: '/dish-2.jpg'
        },
        {
            styleName: 'Blue Strap',
            imageUrl: '/dish-3.jpg'
        },
        {
            styleName: 'Purple Strap',
            imageUrl: '/dish-4.jpg'
        },
    ],
    featureList: [
        "Time", "Heart Rate"
    ]
}

Object.freeze(ProductData); //This line of code just makes your object as a constant. No values can be updated.

export default ProductData;