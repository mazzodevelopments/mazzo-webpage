import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { message } = req.body;

    // Convert message to lowercase for simpler comparison
    const lowercasedMessage = message.toLowerCase();

    // Initialize recommendation with a default response
    let recommendation = `I understand what you need, but let me make sure I’m capturing what you're looking for.`;

    // Check for the keyword 'contact'
    if (
      lowercasedMessage.includes('contact') ||
      lowercasedMessage.includes('get in touch') ||
      lowercasedMessage.includes('reach out')
    ) {
      recommendation = `It sounds like you want to get in touch with us. Please use the following button to go to our contact page where you can reach out to us directly.`;
      res.status(200).json({
        response: recommendation,
        contactButton: {
          text: 'Contact Us',
          url: 'contact' // Adjust the URL to match your contact page route
        }
      });
      return;
    }

    // Identify the service based on the message
    if (
      lowercasedMessage.includes('web') ||
      lowercasedMessage.includes('site') ||
      lowercasedMessage.includes('page') ||
      lowercasedMessage.includes('website')
    ) {
      if (
        lowercasedMessage.includes('how') ||
        lowercasedMessage.includes('create') ||
        lowercasedMessage.includes('build')
      ) {
        recommendation =
          'We specialize in creating responsive, high-performance websites tailored to your business needs. Do you have any specific features or design ideas in mind for your website?';
      } else if (
        lowercasedMessage.includes('improve') ||
        lowercasedMessage.includes('update') ||
        lowercasedMessage.includes('redesign')
      ) {
        recommendation =
          'We can help enhance your current website to improve its performance and responsiveness. Let’s discuss how we can make your website more effective for your business.';
      } else if (
        lowercasedMessage.includes('ecommerce') ||
        lowercasedMessage.includes('online store')
      ) {
        recommendation =
          'If you’re interested in setting up an e-commerce website, we can build a customized online store that meets your business needs. What kind of products are you planning to sell?';
      } else if (
        lowercasedMessage.includes('seo') ||
        lowercasedMessage.includes('search engine optimization')
      ) {
        recommendation =
          'We also offer SEO services to help your website rank higher in search engine results. Are you looking to improve your website’s visibility?';
      } else {
        recommendation =
          'Looking for web development services? We create responsive, high-performance websites tailored to your business needs. Feel free to share your ideas or requirements!';
      }
    } else if (
      lowercasedMessage.includes('app') ||
      lowercasedMessage.includes('mobile') ||
      lowercasedMessage.includes('application')
    ) {
      if (
        lowercasedMessage.includes('how') ||
        lowercasedMessage.includes('create') ||
        lowercasedMessage.includes('build')
      ) {
        recommendation =
          'Our mobile app development services focus on designing and developing applications that deliver a seamless user experience. What kind of app are you looking to create?';
      } else if (
        lowercasedMessage.includes('improve') ||
        lowercasedMessage.includes('update') ||
        lowercasedMessage.includes('enhance')
      ) {
        recommendation =
          'We can enhance your existing mobile app to provide a better user experience. Let’s talk about the features you want to improve or add.';
      } else if (
        lowercasedMessage.includes('ios') ||
        lowercasedMessage.includes('android')
      ) {
        recommendation =
          'Do you need an app for iOS, Android, or both? We can develop apps for multiple platforms to reach a wider audience.';
      } else if (
        lowercasedMessage.includes('feature') ||
        lowercasedMessage.includes('functionality')
      ) {
        recommendation =
          'Looking to add new features to your app? Share your ideas with us, and we can help implement them effectively.';
      } else {
        recommendation =
          'Interested in mobile app development? We design and develop apps that offer a seamless user experience. Share your app ideas or needs, and we’ll bring them to life!';
      }
    } else if (
      lowercasedMessage.includes('ai') ||
      lowercasedMessage.includes('artificial intelligence') ||
      lowercasedMessage.includes('machine learning') ||
      lowercasedMessage.includes('automation')
    ) {
      if (
        lowercasedMessage.includes('how') ||
        lowercasedMessage.includes('implement') ||
        lowercasedMessage.includes('apply')
      ) {
        recommendation =
          'We offer customized artificial intelligence solutions to transform your business. Our AI implementation services can optimize processes and enhance decision-making. How can AI benefit your business?';
      } else if (
        lowercasedMessage.includes('improve') ||
        lowercasedMessage.includes('optimize') ||
        lowercasedMessage.includes('enhance')
      ) {
        recommendation =
          'We can help you integrate AI to improve your existing processes, making them more efficient and data-driven. Let’s discuss how AI can make a difference for you.';
      } else if (
        lowercasedMessage.includes('chatbot') ||
        lowercasedMessage.includes('virtual assistant')
      ) {
        recommendation =
          'If you’re interested in developing a chatbot or virtual assistant, we can create a solution tailored to your needs. What specific tasks or functions do you want your chatbot to handle?';
      } else if (
        lowercasedMessage.includes('data analysis') ||
        lowercasedMessage.includes('analytics')
      ) {
        recommendation =
          'We can also help with AI-powered data analysis to gain valuable insights from your data. What type of data are you looking to analyze?';
      } else {
        recommendation =
          'Looking to implement AI in your business? We offer tailored AI solutions to optimize processes and enhance decision-making. Share your goals, and we’ll provide the best AI strategy for you.';
      }
    } else if (
      lowercasedMessage.includes('cloud') ||
      lowercasedMessage.includes('nube') ||
      lowercasedMessage.includes('cloud computing')
    ) {
      if (
        lowercasedMessage.includes('how') ||
        lowercasedMessage.includes('migrate') ||
        lowercasedMessage.includes('setup')
      ) {
        recommendation =
          'We provide scalable cloud solutions to enhance your business operations. Whether you’re looking to migrate to the cloud or optimize your existing cloud setup, we’re here to help. What are your cloud goals?';
      } else if (
        lowercasedMessage.includes('improve') ||
        lowercasedMessage.includes('optimize') ||
        lowercasedMessage.includes('manage')
      ) {
        recommendation =
          'We can assist with optimizing your cloud solutions to ensure they are scalable and efficient. Let’s discuss how we can improve your cloud infrastructure.';
      } else if (
        lowercasedMessage.includes('security') ||
        lowercasedMessage.includes('backup')
      ) {
        recommendation =
          'Security and backup are crucial in cloud solutions. We can help ensure your cloud setup is secure and your data is backed up properly. What are your main concerns?';
      } else if (
        lowercasedMessage.includes('cost') ||
        lowercasedMessage.includes('budget')
      ) {
        recommendation =
          'We can help you manage and optimize cloud costs to fit your budget. Let’s discuss how we can make your cloud setup more cost-effective.';
      } else {
        recommendation =
          'Interested in cloud solutions? We offer services to implement and optimize scalable cloud solutions for your business. Tell us about your needs, and we’ll provide the best solution!';
      }
    } else {
      recommendation =
        'I’m here to assist with various digital solutions, including web development, mobile app development, AI implementation, and cloud solutions. If you have any specific needs or questions, feel free to let me know!';
    }

    // Respond with JSON immediately
    res.status(200).json({ response: recommendation });
  } else {
    // If not a POST method, return an error
    res.setHeader('Allow', ['POST']);
    res
      .status(405)
      .end(
        `Sorry, the method ${req.method} is not allowed. Please try again using POST.`
      );
  }
}
