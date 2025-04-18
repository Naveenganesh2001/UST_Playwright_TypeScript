let vendors = [];

document.getElementById("addVendorBtn").addEventListener("click", function() {
    document.getElementById("vendorFormContainer").style.display = "block";
});


document.getElementById("dashboardBtn").addEventListener("click", function() {
    localStorage.setItem("vendors", JSON.stringify(vendors)); // Store vendors in localStorage
    window.location.href = "vendorDashboard.html"; // Go to dashboard page
});


function submitVendor() {
    const vendorId = document.getElementById("vendor_id").value;
    const vendorName = document.getElementById("vendor_name").value;
    const productId = document.getElementById("product_id").value;
    const productName = document.getElementById("product_name").value;
    const productPrice = document.getElementById("product_price").value;
    const vendorRating = document.getElementById("vendor_rating").value;
    
    const validationMsg = document.getElementById("vmsg");
    validationMsg.innerHTML = ''; 
    
    // Validation
    if (!vendorId || !vendorName || !productId || !productName || !productPrice || !vendorRating) {
        validationMsg.innerHTML = 'All fields are required!';
        return;
    }


    if (vendorName.length < 5) {
        validationMsg.innerHTML = 'Vendor name must be at least 5 characters!';
        return;
    }

    // Check if vendor ID is unique
    if (vendors.some(v => v.vendor_id === vendorId)) {
        validationMsg.innerHTML = 'Vendor ID must be unique!';
        return;
    }

    if (vendorRating > 5) {
        console.log("skdnks");
        validationMsg.innerHTML = 'Vendor Rating should be 1 to 5';
        return;
    }
    // Add product details in an array
    const products = [{
        product_id: productId,
        product_name: productName,
        product_price: productPrice
    }];

    // Add vendor details
    vendors.push({
        vendor_id: vendorId,
        vendor_name: vendorName,
        products: products,
        vendor_rating: parseFloat(vendorRating)
    });

    // Sort vendors by rating (descending)
    vendors.sort((a, b) => b.vendor_rating - a.vendor_rating);

    // Hide form after submission
    document.getElementById("vendorFormContainer").style.display = "none";

    // Clear the form
    document.getElementById("vendorForm").reset();
}


function loadVendors() {
    const storedVendors = JSON.parse(localStorage.getItem("vendors")) || [];
    const vendorList = document.getElementById("vendorList");
    vendorList.innerHTML = ''; // Clear previous list
    
    storedVendors.forEach(vendor => {
        const vendorDiv = document.createElement('div');
        vendorDiv.classList.add('vendor-item');
        vendorDiv.innerHTML = `
            <h3>${vendor.vendor_name} (Rating: ${vendor.vendor_rating})</h3>
            <p><strong>Vendor ID:</strong> ${vendor.vendor_id}</p>
            <p><strong>Products:</strong></p>
            <ul>
                ${vendor.products.map(product => `<li>${product.product_name} - $${product.product_price}</li>`).join('')}
            </ul>
        `;
        vendorList.appendChild(vendorDiv);
    });
}
