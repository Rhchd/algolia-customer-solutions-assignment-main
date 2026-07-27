*Question 1*  

 
From: marissa@startup.com  
Subject:  Bad design  

Hello,  
  
Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.,  
   
Thanks,  
Marissa  

From: remi.hochede@algolia.com  
Subject: Re: Bad design

Hello Marissa,

Thank you for reaching out and sharing your feedback. I understand your frustration regarding core actions such as clearing and/or deleting indexes and the slowness experienced while iterating.

While this change was implemented to prevent accidental deletions, we truly appreciate your feedback as we work to improve the interface. In the meantime, you can use the Algolia CLI or API to perform these actions efficiently via code.

Please let us know if you have any other suggestions.

Best regards,   
Rémi HOCHEDE
  
--

*Question 2*:   
  
From: carrie@coffee.com  
Subject: URGENT ISSUE WITH PRODUCTION!!!!  
  
Since today 9:15am we have been seeing a lot of errors on our website. Multiple users have reported that they were unable to publish their feedbacks and that an alert box with "Record is too big, please contact enterprise@algolia.com".  
  
Our website is an imdb like website where users can post reviews of coffee shops online. Along with that we enrich every record with a lot of metadata that is not for search. I am already a paying customer of your service, what else do you need to make your search work?  
  
Please advise on how to fix this. Thanks.   

From: remi.hochede@algolia.com  
Subject: Re: URGENT ISSUE WITH PRODUCTION!!!!  

Hello Carrie,

I am sorry for the disruption this is causing on your production site. The "Record is too big" error occurs because Algolia records have a strict size limit (As looking to your subscription plan, 100KB for any individual records).

Looking at the type of website you have, you should avoid storing excessive, non-searchable metadata inside Algolia. Keep only searchable and filterable attributes in Algolia, and store the heavy metadata in your primary database.

Once you reduce the record payload below the size limit, the errors will stop immediately. Let us know if you need help adjusting your record structure!

Best regards,  
Rémi HOCHEDE
  
--

*Question 3*:   


From: marc@hotmail.com  
Subject: Error on website  
  
Hi, my website is not working and here's the error:  
  
![error message](./error.png)  
  
Can you fix it please? 

From: remi.hochede@algolia.com  
Subject: Re: Error on website   

Hi Marc,

Thank you for providing the error details. The **Uncaught ReferenceError: searchkit is not defined** error means your code is attempting to use searchkit before it has been properly declared, imported, or loaded.

To solve this issue : 

- Ensure that searchkit is correctly imported at the top of your JavaScript file (e.g., **import searchkit from 'searchkit';**).

- If it is an external dependency, verify that the package is installed in your project via your package manager (**npm install searchkit**).

Please let me know if you need further assistance !

Best regards,  
Rémi HOCHEDE

