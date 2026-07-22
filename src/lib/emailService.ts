// Email service for order confirmations
// Uses the backend server to send emails via evermaze.info@gmail.com

export interface OrderEmailData {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  orderTotal: number;
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
  shippingAddress: {
    name: string;
    address: string;
    city: string;
    pincode: string;
    phone: string;
  };
  deliveryDate?: string;
  occasion?: string;
  message?: string;
}

export interface EmailResult {
  success: boolean;
  message: string;
  emailId?: string;
}

// Email templates
const createOrderConfirmationEmail = (data: OrderEmailData) => ({
  to: data.customerEmail,
  subject: `Order Confirmed! 🎁 Your Evermaze hamper #${data.orderNumber}`,
  html: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Order Confirmation - Evermaze</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Georgia', serif; background-color: #FAF7F2;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #FAF7F2; padding: 40px 20px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(90, 75, 84, 0.1);">
              <!-- Header -->
              <tr>
                <td style="background-color: #5A4B54; padding: 40px; text-align: center;">
                  <h1 style="margin: 0; font-size: 28px; color: #ffffff; letter-spacing: 4px;">EVERMAZE</h1>
                  <p style="margin: 8px 0 0; font-size: 10px; color: rgba(255,255,255,0.6); letter-spacing: 3px; text-transform: uppercase;">Just For You</p>
                </td>
              </tr>
              
              <!-- Content -->
              <tr>
                <td style="padding: 40px;">
                  <h2 style="margin: 0 0 20px; font-size: 24px; color: #5A4B54;">Your Order is Confirmed! 🎉</h2>
                  <p style="margin: 0 0 24px; font-size: 16px; color: #5A4B54; opacity: 0.8; line-height: 1.6;">
                    Dear ${data.customerName},
                  </p>
                  <p style="margin: 0 0 24px; font-size: 16px; color: #5A4B54; opacity: 0.8; line-height: 1.6;">
                    Thank you for choosing Evermaze! We've received your order and are preparing your personalized hamper with care.
                  </p>
                  
                  <!-- Order Details -->
                  <div style="background-color: #F3EEE8; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding-bottom: 16px; border-bottom: 1px solid rgba(90, 75, 84, 0.1);">
                          <p style="margin: 0; font-size: 12px; color: #8C7A95; text-transform: uppercase; letter-spacing: 2px;">Order Number</p>
                          <p style="margin: 4px 0 0; font-size: 20px; color: #5A4B54; font-weight: bold;">#${data.orderNumber}</p>
                        </td>
                      </tr>
                      ${data.deliveryDate ? `
                      <tr>
                        <td style="padding-top: 16px;">
                          <p style="margin: 0; font-size: 12px; color: #8C7A95; text-transform: uppercase; letter-spacing: 2px;">Delivery Date</p>
                          <p style="margin: 4px 0 0; font-size: 16px; color: #5A4B54;">${data.deliveryDate}</p>
                        </td>
                      </tr>
                      ` : ''}
                    </table>
                  </div>
                  
                  <!-- Items -->
                  <h3 style="margin: 0 0 16px; font-size: 16px; color: #5A4B54; text-transform: uppercase; letter-spacing: 2px;">Order Summary</h3>
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
                    ${data.items.map(item => `
                    <tr>
                      <td style="padding: 12px 0; border-bottom: 1px solid rgba(90, 75, 84, 0.08);">
                        <span style="color: #5A4B54;">${item.name}</span>
                        <span style="color: #5A4B54; opacity: 0.6;"> × ${item.quantity}</span>
                      </td>
                      <td style="padding: 12px 0; border-bottom: 1px solid rgba(90, 75, 84, 0.08); text-align: right; color: #5A4B54;">
                        ₹${(item.price * item.quantity).toLocaleString()}
                      </td>
                    </tr>
                    `).join('')}
                    <tr>
                      <td style="padding: 16px 0; font-weight: bold; font-size: 18px; color: #5A4B54;">Total</td>
                      <td style="padding: 16px 0; text-align: right; font-weight: bold; font-size: 18px; color: #8C7A95;">₹${data.orderTotal.toLocaleString()}</td>
                    </tr>
                  </table>
                  
                  <!-- Shipping Address -->
                  <h3 style="margin: 0 0 16px; font-size: 16px; color: #5A4B54; text-transform: uppercase; letter-spacing: 2px;">Shipping Address</h3>
                  <div style="background-color: #FAF7F2; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                    <p style="margin: 0; font-size: 16px; color: #5A4B54; font-weight: 500;">${data.shippingAddress.name}</p>
                    <p style="margin: 8px 0 0; font-size: 14px; color: #5A4B54; opacity: 0.8; line-height: 1.6;">
                      ${data.shippingAddress.address}<br>
                      ${data.shippingAddress.city} - ${data.shippingAddress.pincode}<br>
                      Phone: ${data.shippingAddress.phone}
                    </p>
                  </div>
                  
                  ${data.message ? `
                  <!-- Personal Message -->
                  <div style="background-color: #F3EEE8; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                    <p style="margin: 0 0 8px; font-size: 12px; color: #8C7A95; text-transform: uppercase; letter-spacing: 2px;">Your Message</p>
                    <p style="margin: 0; font-size: 16px; color: #5A4B54; font-style: italic; line-height: 1.6;">"${data.message}"</p>
                  </div>
                  ` : ''}
                  
                  <!-- CTA -->
                  <div style="text-align: center; margin-top: 32px;">
                    <a href="#" style="display: inline-block; background-color: #8C7A95; color: #ffffff; text-decoration: none; padding: 16px 32px; border-radius: 100px; font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 2px;">
                      Track Your Order
                    </a>
                  </div>
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td style="background-color: #F3EEE8; padding: 32px; text-align: center;">
                  <p style="margin: 0 0 16px; font-size: 14px; color: #5A4B54;">
                    Questions? Reply to this email or contact us at <a href="mailto:evermaze.info@gmail.com" style="color: #8C7A95;">evermaze.info@gmail.com</a>
                  </p>
                  <p style="margin: 0; font-size: 12px; color: #5A4B54; opacity: 0.6;">
                    © 2026 Evermaze. Made with love.
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
});

const createOrderShippedEmail = (data: OrderEmailData) => ({
  to: data.customerEmail,
  subject: `Your Evermaze hamper #${data.orderNumber} has shipped! 📦`,
  html: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Order Shipped - Evermaze</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Georgia', serif; background-color: #FAF7F2;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #FAF7F2; padding: 40px 20px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden;">
              <tr>
                <td style="background-color: #5A4B54; padding: 40px; text-align: center;">
                  <h1 style="margin: 0; font-size: 28px; color: #ffffff; letter-spacing: 4px;">EVERMAZE</h1>
                </td>
              </tr>
              <tr>
                <td style="padding: 40px; text-align: center;">
                  <div style="size: 64px; background-color: #8C7A95; border-radius: 50%; display: inline-block; padding: 20px;">
                    <span style="font-size: 32px;">📦</span>
                  </div>
                  <h2 style="margin: 24px 0; font-size: 24px; color: #5A4B54;">Your hamper is on its way!</h2>
                  <p style="margin: 0; font-size: 16px; color: #5A4B54; opacity: 0.8;">
                    Great news! Your personalized hamper #${data.orderNumber} has been shipped and is on its way to your recipient.
                  </p>
                </td>
              </tr>
              <tr>
                <td style="background-color: #F3EEE8; padding: 32px; text-align: center;">
                  <p style="margin: 0; font-size: 14px; color: #5A4B54;">
                    © 2026 Evermaze. Made with love.
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
});

const createOrderDeliveredEmail = (data: OrderEmailData) => ({
  to: data.customerEmail,
  subject: `Your Evermaze hamper #${data.orderNumber} has been delivered! 🎁`,
  html: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Order Delivered - Evermaze</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Georgia', serif; background-color: #FAF7F2;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #FAF7F2; padding: 40px 20px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden;">
              <tr>
                <td style="background-color: #5A4B54; padding: 40px; text-align: center;">
                  <h1 style="margin: 0; font-size: 28px; color: #ffffff; letter-spacing: 4px;">EVERMAZE</h1>
                </td>
              </tr>
              <tr>
                <td style="padding: 40px; text-align: center;">
                  <div style="size: 64px; background-color: #8C7A95; border-radius: 50%; display: inline-block; padding: 20px;">
                    <span style="font-size: 32px;">🎁</span>
                  </div>
                  <h2 style="margin: 24px 0; font-size: 24px; color: #5A4B54;">Delivered with love!</h2>
                  <p style="margin: 0; font-size: 16px; color: #5A4B54; opacity: 0.8;">
                    Your hamper #${data.orderNumber} has been delivered. We hope it brings joy to your special someone!
                  </p>
                </td>
              </tr>
              <tr>
                <td style="background-color: #F3EEE8; padding: 32px; text-align: center;">
                  <p style="margin: 0; font-size: 14px; color: #5A4B54;">
                    © 2026 Evermaze. Made with love.
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
});

// Simulated email sending (in production, this would use a real email service)
async function sendEmail(emailData: { to: string; subject: string; html: string }): Promise<{ success: boolean; message: string }> {
  try {
    // In production, you would integrate with an email service like:
    // - SendGrid
    // - Mailgun
    // - AWS SES
    // - Resend
    // - Nodemailer with SMTP
    
    // For demo purposes, we'll simulate a successful email send
    console.log('Email would be sent:', {
      to: emailData.to,
      subject: emailData.subject,
    });
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // For demo, always succeed but log the email
    return { 
      success: true, 
      message: 'Email queued successfully',
      emailId: `email_${Date.now()}`
    };
  } catch (error) {
    console.error('Email send failed:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to send email'
    };
  }
}

export async function sendOrderConfirmation(orderData: OrderEmailData): Promise<EmailResult> {
  const emailData = createOrderConfirmationEmail(orderData);
  return sendEmail(emailData);
}

export async function sendOrderShipped(orderData: OrderEmailData): Promise<EmailResult> {
  const emailData = createOrderShippedEmail(orderData);
  return sendEmail(emailData);
}

export async function sendOrderDelivered(orderData: OrderEmailData): Promise<EmailResult> {
  const emailData = createOrderDeliveredEmail(orderData);
  return sendEmail(emailData);
}

// Order storage (in production, this would be a database)
interface StoredOrder {
  id: string;
  data: OrderEmailData;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  emailSent: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const orderStorage = new Map<string, StoredOrder>();

export async function saveOrder(orderData: OrderEmailData): Promise<{ success: boolean; orderId: string }> {
  const orderId = `#EVM${Date.now().toString().slice(-8)}`;
  
  const order: StoredOrder = {
    id: orderId,
    data: orderData,
    status: 'confirmed',
    emailSent: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  
  orderStorage.set(orderId, order);
  
  // Try to send confirmation email, but don't block if it fails
  try {
    const emailResult = await sendOrderConfirmation(orderData);
    if (emailResult.success) {
      order.emailSent = true;
    }
    orderStorage.set(orderId, order);
  } catch (error) {
    console.error('Failed to send confirmation email:', error);
    // Order is still saved, just email failed
  }
  
  return { success: true, orderId };
}

export async function getOrder(orderId: string): Promise<StoredOrder | null> {
  return orderStorage.get(orderId) || null;
}

export async function updateOrderStatus(orderId: string, status: StoredOrder['status']): Promise<boolean> {
  const order = orderStorage.get(orderId);
  if (!order) return false;
  
  order.status = status;
  order.updatedAt = new Date();
  orderStorage.set(orderId, order);
  
  // Send appropriate email based on status
  try {
    switch (status) {
      case 'shipped':
        await sendOrderShipped(order.data);
        break;
      case 'delivered':
        await sendOrderDelivered(order.data);
        break;
    }
  } catch (error) {
    console.error(`Failed to send ${status} email:`, error);
  }
  
  return true;
}
