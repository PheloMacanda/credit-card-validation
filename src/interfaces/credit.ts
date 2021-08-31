export interface CreditCardItem {
    cardNumber: String
    date: Date
    cvv: Number
    country: String
}

export interface CreditCard {
    creditCard: CreditCardItem
}