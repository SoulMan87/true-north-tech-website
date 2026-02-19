// src/utils/productImages.js

import realEstateImg from "@/assets/real-estate.jpg";
import kdfImg from "@/assets/kds.jpg";
import driverImg from "@/assets/driver-saas.jpg";
import hotelManagementSystem from "@/assets/hotel-management-system.jpg";
import customSoftwareServices from "@/assets/custom-software-services.jpg";
import funeralManagementImg from "@/assets/funeral-management.jpg";

/**
 * Backend key → local asset
 */
export const productImages = {
  hotelManagementSystem,
  driverImg,
  kdfImg,
  realEstateImg,
  customSoftwareServices,
  funeralManagementImg,
};

/**
 * Return correct image or fallback
 */
export function resolveProductImage(imageKey) {
  return productImages[imageKey] || funeralManagementImg;
}
