import { Device } from "../interfaces/device.interface";

export function filterDevices(products: Device[], selectedBrands?: string[], minPrice?: number, maxPrice?: number, rate?: number) {
    return products.filter(product => {
        const matchesBrand = !selectedBrands || selectedBrands.length === 0 || (product.manufacturer && selectedBrands.includes(product.manufacturer.toLowerCase()));
        const matchesPrice = (minPrice === 0 && maxPrice === 0) || (!minPrice && minPrice !== 0 || product.price >= minPrice) && (!maxPrice && maxPrice !== 0 || product.price <= maxPrice);
        const matchesRate = !rate || product.rate == rate;
        
        return matchesBrand && matchesPrice && matchesRate;
    });
}