import { updateBiddingPrice } from './purchasingContent';



describe('PurchasingContent Component', () => {
    test('changes state of price when updateBiddingPrice is called', async () => {
        const mockPrice = 100;
        const mockId = 1;
        const mockNewPrice = 200;
        expect(updateBiddingPrice(mockId, mockNewPrice)).toEqual(mockPrice);
        
});
});