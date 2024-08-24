<!-- resources/views/print.blade.php -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Invoice</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        /* Import Google font for a cake shop feel */
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Open+Sans:wght@400;600&display=swap');

        body {
            font-family: 'Open Sans', Arial, sans-serif; /* Provide fallback fonts */
            color: #333;
            font-size: 12px;
            margin: 20px;
            background-color: #fff;
        }

        .invoice-container {
            max-width: 800px;
            margin: auto;
            padding: 20px;
            border: 1px solid #777;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
        }

        .header {
            text-align: center;
            margin-bottom: 20px;
            border-bottom: 2px dashed #777; /* Dashed line for a bakery feel */
            padding-bottom: 10px;
        }

        .header h2 {
            margin: 0;
            padding: 0;
            font-size: 24px;
            color: #333;
            font-family: 'Dancing Script', cursive; /* Cursive for a cake shop look */
        }

        .header p {
            margin: 5px 0;
            font-size: 12px;
        }

        .details {
            margin-bottom: 10px;
            padding-bottom: 5px;
        }

        .details p {
            margin: 5px 0;
            font-size: 12px;
        }

        .items {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }

        .items th, .items td {
            padding: 8px;
            border: 1px solid #ddd;
            text-align: left;
        }

        .items th {
            background-color: #f9f9f9;
            color: #333;
            font-weight: bold;
        }

        .items th.item-column, .items td.item-column {
            width: 50%; /* Give more space to the Items column */
        }

        .items th.qty-column, .items td.qty-column {
            width: 10%; /* Reduce space for the Qty column */
        }

        .price-column, .total-column {
            text-align: right;
        }

        .price-content, .total-content {
            display: table;
            width: 100%;
        }

        .currency {
            display: table-cell;
            width: 1%;
            white-space: nowrap;
            text-align: left;
        }

        .amount {
            display: table-cell;
            text-align: right;
            width: 99%;
        }

        .total-row {
            font-weight: bold;
        }

        .total {
            font-weight: bold;
            text-align: right;
            margin-bottom: 0;
            color: #333;
        }

        .notes {
            font-size: 10px;
            color: #555;
            margin-bottom: 20px;
        }

        .payment-info {
            font-size: 12px;
            margin-bottom: 20px;
            padding: 10px;
            border: 1px solid #ddd;
            background-color: #f9f9f9;
            border-radius: 5px;
        }

        .footer {
            text-align: center;
            font-size: 10px;
            color: #000;
            border-top: 1px dashed #777;
            padding-top: 10px;
            margin-top: 20px;
        }

        .signature {
            margin-top: 30px;
            text-align: right; /* Aligns the signature section to the right */
        }

        .signature p {
            margin: 0;
            padding: 0;
        }

        .signature-space {
            height: 50px; /* Space for a signature */
            width: 200px;
            margin-top: 10px;
            margin-bottom: 10px;
            margin-left: auto; /* Aligns space to the right */
        }

        .signature-name {
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="invoice-container">
        <!-- Invoice Header -->
        <div class="header">
            <h2>{{ $from['name'] }}</h2>
            <p>{{ $from['address'] }}</p>
            <p><i class="fas fa-phone"></i> {{ $from['phone'] }}</p>
        </div>

        <!-- Invoice Details -->
        <div class="details">
            <p><strong>Invoice No:</strong> #{{ $invoice_no }}</p>
            <p><strong>Invoice Date:</strong> {{ $invoice_date }}</p>
            <p><strong>Customer:</strong> {{ $to['name'] }}</p>
            <p><strong>Customer Address:</strong> {{ $to['address'] }}</p>
            <p><strong>Phone:</strong> {{ $to['phone'] }}</p>
        </div>

        <!-- Payment Information -->
        <div class="payment-info">
            <p><strong>Payment Info:</strong></p>
            <p><strong>Bank:</strong> {{ $bank_info['name'] }}</p>
            <p><strong>Account Number:</strong> {{ $bank_info['no'] }}</p>
        </div>

        <!-- Items Table -->
        <table class="items">
            <thead>
                <tr>
                    <th class="item-column">ITEM</th>
                    <th class="qty-column">QTY</th>
                    <th>PRICE</th>
                    <th>TOTAL</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($items as $item)
                    <tr>
                        <td class="item-column">{{ $item['title'] }}</td>
                        <td class="qty-column">{{ $item['quantity'] }}</td>
                        <td class="price-column">
                            <div class="price-content">
                                <span class="currency">Rp</span>
                                <span class="amount">{{ number_format($item['price'], 0, ',', '.') }}</span>
                            </div>
                        </td>
                        <td class="total-column">
                            <div class="total-content">
                                <span class="currency">Rp</span>
                                <span class="amount">{{ number_format($item['total'], 0, ',', '.') }}</span>
                            </div>
                        </td>
                    </tr>
                @endforeach
                <!-- Grand Total Row -->
                <tr class="total-row">
                    <td colspan="3" class="total">Total:</td>
                    <td class="total-column">
                        <div class="total-content">
                            <span class="currency">Rp</span>
                            <span class="amount">{{ number_format($sub_total, 0, ',', '.') }}</span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Total Amount in Words -->
        <div class="total">
            <p>({{ $sub_total_in_words }})</p>
        </div>

        <!-- Right-Aligned Signature Section -->
        <div class="signature">
            <p>Best regards,</p>
            <div class="signature-space"></div> <!-- Space for signature -->
            <p class="signature-name">Susan</p>
        </div>

        <!-- Notes Section -->
        <div class="notes">
            <p>{{ $notes }}</p>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>Thank you for your business!</p>
            <p>© {{ date('Y') }} {{ $from['name'] }}. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
