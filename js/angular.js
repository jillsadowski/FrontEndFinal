

var clubTabContent = [
    {heading: "About",
     body: "        Acquiring a Gamer's Club 2-Month Membership.        You can join the Gamer's club by loading $125 onto a Louisville Game Shop Gift Card (Gamer's Card). This can be done at the counter at The Shop. If this is your first time joining the club, you will be asked for your full name and other optional information. The membership will expire 2 months from the day you join or renew. Please keep in mind that any money loaded onto a gift card is good indefinitely, regardless of whether or not your membership is current; There is no need to spend all the money on your Gamer's Card during the 2-month period, the gift card will always be good"},
    {heading: "Benefits of Membership",
     body: "Discount on \"Big Ticket\" Items. Members will receive a discounted price on items with an MSRP greater than $50. This discount will vary from item to item, but will range from 5% off to 20% off. Tokens of Appreciation. For every $100 dollars you spend while you are a member, you will be eligible to snag a few freebies off the shelf at the store of small accessories such as card sleeves, pots of paint, dice, booster packs, and so on. Items that are available as Tokens of Appreciation will be marked with special stickers, either yellow or blue. A member who has crossed a $100 threshold is entitled to take either 2 items with yellow stickers or 1 item with a blue sticker. Only retail purchases count towards your $100 threshold, not entry fees, purchasing gift cards, or consigned goods."},
    {heading: "Notes",
     body: "Clarifications and Designer's Notes. Your customer account is tied to your full name, not your gamer's card. Give your name at check out to receive your benefits. Only purchases made in person by the named individual are eligible to receive benefits. You may be asked to show identification. The Gamer's Club and its benefits are offered at the discretion of The Louisville Game Shop. The Louisville Game Shop reserves the right to rescind or revise this offer at any time at its own discretion. In the case of any dispute regarding benefits, The Louisville Game Shop is the sole arbiter."}
]

var app = angular.module('clubTabs', []);
var scopeInit = function ($scope) {
        $scope.tab = 1;
        $scope.clubTabContent = clubTabContent;
}
app.controller('GamerClubTabsController', ['$scope',scopeInit])

