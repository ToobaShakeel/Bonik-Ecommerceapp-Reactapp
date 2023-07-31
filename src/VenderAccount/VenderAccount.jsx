import React, { useState } from "react";
import styles from "./VendorAccount.module.css"; // Import the CSS module

const VendorAccount = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    companyName: "",
    contactInfo: "",
    taxId: "",
    bankInfo: "",
    productDescription: "",
    businessType: "",
    businessRegistrationNumber: "",
    paymentTerms: "",
    // Add other form fields here
  });

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleFormSubmit = () => {
    // Perform validation here
    if (!formData.companyName) {
      alert("Please enter the Company Name.");
      return;
    }
  
    if (!formData.contactInfo) {
      alert("Please enter the Contact Information.");
      return;
    }
  
    if (currentPage === 1) {
      // Additional validation for Page 1 fields
      if (!formData.productDescription) {
        alert("Please enter the Product Description.");
        return;
      }
  
      if (!formData.businessType) {
        alert("Please enter the Business Type.");
        return;
      }
    } else if (currentPage === 2) {
      // Additional validation for Page 2 fields
      if (!formData.taxId) {
        alert("Please enter the Tax Identification Number.");
        return;
      }
  
      if (!formData.bankInfo) {
        alert("Please enter the Banking Information.");
        return;
      }
  
      if (!formData.businessRegistrationNumber) {
        alert("Please enter the Business Registration Number.");
        return;
      }
  
      if (!formData.paymentTerms) {
        alert("Please enter the Payment Terms.");
        return;
      }
    }
  
    // If all fields are filled, proceed with form submission
    alert("Vendor account setup completed successfully!");
  };
  

  return (
    <div className={styles["vendor-account"]}>
      <h2>VENDOR  ACCOUNT  SETUP</h2>
      {currentPage === 1 && (
        <div>
          <h3>Page 1: Basic Vendor Information</h3>
          <input
            type="text"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
          />
          <br />
          <input
            type="text"
            placeholder="Contact Information"
            value={formData.contactInfo}
            onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
          />
          <br />
          {/* Additional fields for Page 1 */}
          <input
            type="text"
            placeholder="Product Description"
            value={formData.productDescription}
            onChange={(e) => setFormData({ ...formData, productDescription: e.target.value })}
          />
          <br />
          <input
            type="text"
            placeholder="Business Type"
            value={formData.businessType}
            onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
          />
        </div>
      )}

      {currentPage === 2 && (
        <div>
          <h3>Page 2: Additional Vendor Details</h3>
          <input
            type="text"
            placeholder="Tax Identification Number"
            value={formData.taxId}
            onChange={(e) => setFormData({ ...formData, taxId: e.target.value })}
          />
          <br />
          <input
            type="text"
            placeholder="Banking Information"
            value={formData.bankInfo}
            onChange={(e) => setFormData({ ...formData, bankInfo: e.target.value })}
          />
          <br />
          {/* Additional fields for Page 2 */}
          <input
            type="text"
            placeholder="Business Registration Number"
            value={formData.businessRegistrationNumber}
            onChange={(e) =>
              setFormData({ ...formData, businessRegistrationNumber: e.target.value })
            }
          />
          <br />
          <input
            type="text"
            placeholder="Payment Terms"
            value={formData.paymentTerms}
            onChange={(e) => setFormData({ ...formData, paymentTerms: e.target.value })}
          />
        </div>
      )}

      {/* Page navigation buttons */}
      {currentPage > 1 && <button onClick={handlePreviousPage}>Previous</button>}
      {currentPage < 2 ? (
        <button onClick={handleNextPage}>Next</button>
      ) : (
        <button onClick={handleFormSubmit}>Complete</button>
      )}
    </div>
  );
};

export default VendorAccount;
