/**
 * Evermaze Email Service
 * Fully functional email service using Resend API for sending order emails
 * Configured for evermaze.info@gmail.com
 */

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  items: OrderItem[];
  shippingAddress: Address;
  totalAmount: number;
  paymentMethod: string;
  specialMessage?: string;
  deliveryDate?: string;
  createdAt: Date;
}

export interface OrderItem {
  name: string;
  quantity: number;
  price: number;
  image?: string;
}

export interface Address {
  fullName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
}

export interface EmailResult {
  success: boolean;
  messageId?: string;
  error?: string;
  orderSaved: boolean;
}

// Email configuration
const EMAIL_CONFIG = {
  fromEmail: 'Evermaze <orders@evermaze.com>',
  fromName: 'Evermaze',
  companyEmail: 'evermaze.info@gmail.com',
  companyName: 'Evermaze',
  website: 'https://evermaze.com',
};

// Generate unique order ID
export function generateOrderId(): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 8);
  return `${timestamp}-${random}`;
}

// Save order to local storage as backup
function saveOrderLocally(order: Order): void {
  try {
    const savedOrders = localStorage.getItem('evermaze_orders');
    const orders = savedOrders ? JSON.parse(savedOrders) : [];
    orders.push(order);
    localStorage.setItem('evermaze_orders', JSON.stringify(orders));
  } catch (error) {
    console.error('Failed to save order locally:', error);
  }
}

// Get all saved orders
export function getSavedOrders(): Order[] {
  try {
    const savedOrders = localStorage.getItem('evermaze_orders');
    return savedOrders ? JSON.parse(savedOrders) : [];
  } catch {
    return [];
  }
}

// Clear saved orders
export function clearSavedOrders(): void {
  localStorage.removeItem('evermaze_orders');
}

// Order confirmation email template
function createOrderConfirmationEmail(order: Order) {
  const orderDate = new Date(order.createdAt).toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return {
    subject: `Your Evermaze Order #${order.id.slice(0, 8).toUpperCase()} is Confirmed ✨`,
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Order Confirmation - Evermaze</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #F8F5F2;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #F8F5F2;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 8px 40px rgba(86, 72, 80, 0.12);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #7D6B87 0%, #66566F 100%); padding: 48px 40px; text-align: center;">
              <h1 style="margin: 0; font-family: Georgia, serif; font-size: 32px; font-weight: 400; color: #ffffff; letter-spacing: 6px;">
                EVERMAZE
              </h1>
              <p style="margin: 12px 0 0; color: rgba(255,255,255,0.8); font-size: 12px; letter-spacing: 3px; text-transform: uppercase;">
                Love in a Box
              </p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 48px 40px;">
              <h2 style="margin: 0 0 8px; font-family: Georgia, serif; font-size: 28px; font-weight: 400; color: #2F272C;">
                Dear ${order.customerName.split(' ')[0]},
              </h2>
              <p style="margin: 0; color: #4B4347; line-height: 1.8; font-size: 15px;">
                Thank you for your beautiful order! We're absolutely delighted that you've chosen 
                Evermaze to help you celebrate this special moment. Your gift hamper is being 
                prepared with extra love and care.
              </p>
              
              <!-- Order Details -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin: 32px 0; background-color: #F8F5F2; border-radius: 16px; overflow: hidden;">
                <tr>
                  <td style="padding: 24px;">
                    <p style="margin: 0 0 16px; color: #7D6B87; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; font-weight: 600;">
                      Order #${order.id.slice(0, 8).toUpperCase()}
                    </p>
                    <p style="margin: 0 0 20px; color: #4B4347; font-size: 13px;">
                      Placed on ${orderDate}
                    </p>
                    
                    ${order.items.map(item => `
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 16px;">
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #E9DDD2;">
                            <span style="color: #2F272C; font-weight: 500;">${item.name}</span>
                            <span style="color: #4B4347; margin-left: 8px;">× ${item.quantity}</span>
                          </td>
                          <td align="right" style="padding: 12px 0; border-bottom: 1px solid #E9DDD2;">
                            <span style="color: #2F272C; font-weight: 500;">₹${(item.price * item.quantity).toLocaleString('en-IN')}</span>
                          </td>
                        </tr>
                      </table>
                    `).join('')}
                    
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top: 8px;">
                      <tr>
                        <td style="padding: 16px 0 0;">
                          <span style="color: #4B4347;">Subtotal</span>
                        </td>
                        <td align="right" style="padding: 16px 0 0;">
                          <span style="color: #4B4347;">₹${order.totalAmount.toLocaleString('en-IN')}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0 0;">
                          <span style="color: #4B4347;">Shipping</span>
                        </td>
                        <td align="right" style="padding: 8px 0 0;">
                          <span style="color: #7D6B87; font-weight: 500;">FREE</span>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2" style="padding: 16px 0 0; border-top: 2px solid #7D6B87;">
                          <span style="color: #2F272C; font-size: 18px; font-weight: 600;">Total</span>
                        </td>
                        <td align="right" style="padding: 16px 0 0; border-top: 2px solid #7D6B87;">
                          <span style="color: #2F272C; font-size: 18px; font-weight: 600;">₹${order.totalAmount.toLocaleString('en-IN')}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- Shipping Address -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin: 24px 0; background-color: #E9DDD2; border-radius: 16px; padding: 20px;">
                <tr>
                  <td>
                    <p style="margin: 0 0 8px; color: #7D6B87; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; font-weight: 600;">
                      Shipping Address
                    </p>
                    <p style="margin: 0; color: #2F272C; line-height: 1.6; font-size: 14px;">
                      ${order.shippingAddress.fullName}<br>
                      ${order.shippingAddress.addressLine1}<br>
                      ${order.shippingAddress.addressLine2 ? order.shippingAddress.addressLine2 + '<br>' : ''}
                      ${order.shippingAddress.city}, ${order.shippingAddress.state} - ${order.shippingAddress.pincode}<br>
                      Phone: ${order.shippingAddress.phone}
                    </p>
                  </td>
                </tr>
              </table>
              
              ${order.specialMessage ? `
                <p style="margin: 24px 0; padding: 20px; background-color: #F8F5F2; border-radius: 12px; color: #4B4347; font-style: italic;">
                  Your special message: "${order.specialMessage}"
                </p>
              ` : ''}
              
              <p style="margin: 32px 0 0; color: #4B4347; line-height: 1.8; font-size: 15px;">
                We'll send you another email when your hamper is shipped. If you have any questions, 
                we're here to help at <a href="mailto:${EMAIL_CONFIG.companyEmail}" style="color: #7D6B87;">${EMAIL_CONFIG.companyEmail}</a>
              </p>
              
              <p style="margin: 32px 0 0; color: #4B4347; line-height: 1.8; font-size: 15px;">
                With warmth and love,<br>
                <strong style="color: #2F272C;">The Evermaze Team</strong>
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #2E292C; padding: 32px 40px; text-align: center;">
              <p style="margin: 0; color: rgba(255,255,255,0.7); font-size: 12px;">
                © ${new Date().getFullYear()} Evermaze. Made with love in India.
              </p>
              <p style="margin: 16px 0 0; color: rgba(255,255,255,0.5); font-size: 11px;">
                Questions? <a href="mailto:${EMAIL_CONFIG.companyEmail}" style="color: #7D6B87;">${EMAIL_CONFIG.companyEmail}</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `,
    text: `
Dear ${order.customerName.split(' ')[0]},

Thank you for your beautiful order! Your Evermaze hamper is being prepared with love.

Order #${order.id.slice(0, 8).toUpperCase()}
Placed on ${orderDate}

Items:
${order.items.map(item => `- ${item.name} × ${item.quantity}: ₹${(item.price * item.quantity).toLocaleString('en-IN')}`).join('\n')}

Total: ₹${order.totalAmount.toLocaleString('en-IN')}

Shipping Address:
${order.shippingAddress.fullName}
${order.shippingAddress.addressLine1}
${order.shippingAddress.city}, ${order.shippingAddress.state} - ${order.shippingAddress.pincode}

We'll notify you when your order ships.

With warmth,
The Evermaze Team

© ${new Date().getFullYear()} Evermaze. Made with love in India.
    `,
  };
}

// Order shipped email template
function createOrderShippedEmail(order: Order, trackingNumber?: string) {
  return {
    subject: `Your Evermaze Order #${order.id.slice(0, 8).toUpperCase()} Has Shipped! 📦`,
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Order Shipped - Evermaze</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #F8F5F2;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #F8F5F2;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 8px 40px rgba(86, 72, 80, 0.12);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #7D6B87 0%, #66566F 100%); padding: 48px 40px; text-align: center;">
              <h1 style="margin: 0; font-family: Georgia, serif; font-size: 32px; font-weight: 400; color: #ffffff; letter-spacing: 6px;">
                EVERMAZE
              </h1>
              <p style="margin: 12px 0 0; color: rgba(255,255,255,0.8); font-size: 12px; letter-spacing: 3px; text-transform: uppercase;">
                Love in a Box
              </p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 48px 40px;">
              <h2 style="margin: 0 0 8px; font-family: Georgia, serif; font-size: 28px; font-weight: 400; color: #2F272C;">
                Great news, ${order.customerName.split(' ')[0]}!
              </h2>
              <p style="margin: 0; color: #4B4347; line-height: 1.8; font-size: 15px;">
                Your Evermaze hamper is on its way! ✨ Your thoughtful gift is now traveling 
                to create a beautiful moment.
              </p>
              
              ${trackingNumber ? `
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin: 32px 0; background-color: #7D6B87; border-radius: 16px; overflow: hidden;">
                  <tr>
                    <td style="padding: 28px; text-align: center;">
                      <p style="margin: 0; color: rgba(255,255,255,0.8); font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">
                        Tracking Number
                      </p>
                      <p style="margin: 12px 0 0; color: #ffffff; font-size: 20px; font-weight: 500; letter-spacing: 2px;">
                        ${trackingNumber}
                      </p>
                    </td>
                  </tr>
                </table>
              ` : ''}
              
              <p style="margin: 32px 0 0; color: #4B4347; line-height: 1.8; font-size: 15px;">
                We hope whoever receives this hamper feels the love and care we put into 
                every single box. Thank you for choosing Evermaze!
              </p>
              
              <p style="margin: 32px 0 0; color: #4B4347; line-height: 1.8; font-size: 15px;">
                With warmth and love,<br>
                <strong style="color: #2F272C;">The Evermaze Team</strong>
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #2E292C; padding: 32px 40px; text-align: center;">
              <p style="margin: 0; color: rgba(255,255,255,0.7); font-size: 12px;">
                © ${new Date().getFullYear()} Evermaze. Made with love in India.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `,
    text: `
Great news, ${order.customerName.split(' ')[0]}!

Your Evermaze hamper has shipped! 📦

${trackingNumber ? `Tracking Number: ${trackingNumber}` : ''}

We hope whoever receives this hamper feels the love and care we put into every single box.

With warmth,
The Evermaze Team

© ${new Date().getFullYear()} Evermaze. Made with love in India.
    `,
  };
}

// Order delivered email template
function createOrderDeliveredEmail(order: Order) {
  return {
    subject: `Your Evermaze Order #${order.id.slice(0, 8).toUpperCase()} Has Been Delivered! 💝`,
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Order Delivered - Evermaze</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #F8F5F2;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #F8F5F2;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 8px 40px rgba(86, 72, 80, 0.12);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #7D6B87 0%, #66566F 100%); padding: 48px 40px; text-align: center;">
              <h1 style="margin: 0; font-family: Georgia, serif; font-size: 32px; font-weight: 400; color: #ffffff; letter-spacing: 6px;">
                EVERMAZE
              </h1>
              <p style="margin: 12px 0 0; color: rgba(255,255,255,0.8); font-size: 12px; letter-spacing: 3px; text-transform: uppercase;">
                Love in a Box
              </p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 48px 40px;">
              <h2 style="margin: 0 0 8px; font-family: Georgia, serif; font-size: 28px; font-weight: 400; color: #2F272C;">
                Your hamper has arrived! 🎉
              </h2>
              <p style="margin: 0; color: #4B4347; line-height: 1.8; font-size: 15px;">
                We hope you had a wonderful unboxing experience! Thank you for trusting 
                Evermaze with your special moments.
              </p>
              
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin: 32px 0; background-color: #F8F5F2; border-radius: 16px; padding: 28px; text-align: center;">
                <tr>
                  <td>
                    <p style="margin: 0; color: #7D6B87; font-size: 32px; letter-spacing: 8px;">
                      ★★★★★
                    </p>
                    <p style="margin: 16px 0 0; color: #2F272C; font-size: 15px; line-height: 1.6;">
                      We'd love to hear your thoughts! Share your experience and help 
                      other gift-givers discover Evermaze.
                    </p>
                  </td>
                </tr>
              </table>
              
              <p style="margin: 32px 0 0; color: #4B4347; line-height: 1.8; font-size: 15px;">
                Thank you for being part of the Evermaze family. We look forward to 
                helping you create more beautiful moments!
              </p>
              
              <p style="margin: 32px 0 0; color: #4B4347; line-height: 1.8; font-size: 15px;">
                With love,<br>
                <strong style="color: #2F272C;">The Evermaze Team</strong>
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #2E292C; padding: 32px 40px; text-align: center;">
              <p style="margin: 0; color: rgba(255,255,255,0.7); font-size: 12px;">
                © ${new Date().getFullYear()} Evermaze. Made with love in India.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `,
    text: `
Your Evermaze hamper has arrived! 🎉

We hope you had a wonderful unboxing experience! Thank you for trusting Evermaze with your special moments.

We'd love to hear your thoughts! Share your experience and help other gift-givers discover Evermaze.

★★★★★

Thank you for being part of the Evermaze family.

With love,
The Evermaze Team

© ${new Date().getFullYear()} Evermaze. Made with love in India.
    `,
  };
}

// Main email sending function
export async function sendOrderEmail(
  orderData: Omit<Order, 'id' | 'createdAt'>,
  emailType: 'confirmation' | 'shipped' | 'delivered' = 'confirmation',
  additionalData?: { trackingNumber?: string }
): Promise<EmailResult> {
  const fullOrder: Order = {
    ...orderData,
    id: generateOrderId(),
    createdAt: new Date(),
  };

  // Get the appropriate email template
  let emailContent;
  switch (emailType) {
    case 'shipped':
      emailContent = createOrderShippedEmail(fullOrder, additionalData?.trackingNumber);
      break;
    case 'delivered':
      emailContent = createOrderDeliveredEmail(fullOrder);
      break;
    default:
      emailContent = createOrderConfirmationEmail(fullOrder);
  }

  // First, save order locally as backup
  saveOrderLocally(fullOrder);

  try {
    // Try to send email via API endpoint
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: orderData.customerEmail,
        from: EMAIL_CONFIG.fromEmail,
        subject: emailContent.subject,
        html: emailContent.html,
        text: emailContent.text,
        orderId: fullOrder.id,
        emailType,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return {
        success: true,
        messageId: data.messageId || `msg_${Date.now()}`,
        orderSaved: true,
      };
    } else {
      // API returned error, but order is saved
      console.warn('Email API error:', response.status);
      return {
        success: false,
        error: 'Email service temporarily unavailable. Your order has been saved.',
        orderSaved: true,
      };
    }
  } catch (error) {
    // Network error, but order is saved locally
    console.error('Email sending error:', error);
    return {
      success: false,
      error: 'Unable to send email. Your order has been saved and we will retry.',
      orderSaved: true,
    };
  }
}

// Send email directly via Resend API (for server-side use)
export async function sendEmailViaResend(
  apiKey: string,
  to: string,
  subject: string,
  html: string,
  text: string
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: EMAIL_CONFIG.fromEmail,
        to: [to],
        subject,
        html,
        text,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return { success: true, messageId: data.id };
    } else {
      const error = await response.json();
      return { success: false, error: error.message };
    }
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}

// Process pending orders (retry mechanism)
export async function processPendingOrders(): Promise<{ processed: number; failed: number }> {
  const orders = getSavedOrders();
  let processed = 0;
  let failed = 0;

  for (const order of orders) {
    try {
      const result = await sendOrderEmail(
        {
          customerName: order.customerName,
          customerEmail: order.customerEmail,
          customerPhone: order.customerPhone,
          items: order.items,
          shippingAddress: order.shippingAddress,
          totalAmount: order.totalAmount,
          paymentMethod: order.paymentMethod,
        },
        'confirmation'
      );

      if (result.success) {
        processed++;
        // Remove from saved orders
        const updatedOrders = orders.filter(o => o.id !== order.id);
        localStorage.setItem('evermaze_orders', JSON.stringify(updatedOrders));
      } else {
        failed++;
      }
    } catch {
      failed++;
    }
  }

  return { processed, failed };
}

// Get pending orders count
export function getPendingOrdersCount(): number {
  return getSavedOrders().length;
}
