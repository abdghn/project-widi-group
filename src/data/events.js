const data = [
    {
      key: 0,
      title: "Meeting with Account",
      allDay: true,
      start: "Tue Jul 31 2018 00:00:00 GMT+0300 (GMT+03:00)",
      end: "Thu Aug 02 2018 00:00:00 GMT+0300 (GMT+03:00)"
    },
    {
      key: 1,
      title: "Delivery",
      start: "Mon Sep 10 2018 00:00:00 GMT+0300 (GMT+03:00)",
      end: "Mon Sep 10 2018 00:00:00 GMT+0300 (GMT+03:00)"
    },
    {
      key: 2,
      title: "Sale Week",
      start: "Sun Oct 14 2018 00:00:00 GMT+0300 (GMT+03:00)",
      end: "Sun Oct 21 2018 00:00:00 GMT+0300 (GMT+03:00)"
    },
    {
      key: 3,
      title: "Delivery",
      start: "Tue Nov 13 2018 00:00:00 GMT+0300 (GMT+03:00)",
      end: "Tue Nov 13 2018 00:00:00 GMT+0300 (GMT+03:00)"
    },
    {
      key: 4,
      title: "Tax Days",
      start: "Sun Dec 09 2018 00:00:00 GMT+0300 (GMT+03:00)",
      end: "Fri Dec 14 2018 00:00:00 GMT+0300 (GMT+03:00)"
    },
    {
      key: 5,
      title: "Marketing Conference",
      start: "Sun Nov 04 2018 00:00:00 GMT+0300 (GMT+03:00)",
      end: "Wed Nov 07 2018 00:00:00 GMT+0300 (GMT+03:00)"
    },
    {
      key: 6,
      title: "Meeting",
      start: "Sat Dec 08 2018 00:00:00 GMT+0300 (GMT+03:00)",
      end: "Sat Dec 08 2018 00:00:00 GMT+0300 (GMT+03:00)"
    },
    {
      key: 7,
      title: "Sales",
      start: "Tue Dec 25 2018 00:00:00 GMT+0300 (GMT+03:00)",
      end: "Fri Dec 28 2018 00:00:00 GMT+0300 (GMT+03:00)"
    },
    {
      key: 8,
      title: "Store Repairs",
      start: "Mon Jan 14 2019 00:00:00 GMT+0300 (GMT+03:00)",
      end: "Wed Jan 16 2019 00:00:00 GMT+0300 (GMT+03:00)"
    },
    {
      key: 9,
      title: "Web Meeting",
      start: "Tue Feb 05 2019 00:00:00 GMT+0300 (GMT+03:00)",
      end: "Fri Feb 08 2019 00:00:00 GMT+0300 (GMT+03:00)"
    },
    {
      key: 10,
      title: "Delivery",
      start: "Fri Feb 22 2019 00:00:00 GMT+0300 (GMT+03:00)",
      end: "Sat Feb 23 2019 00:00:00 GMT+0300 (GMT+03:00)"
    },
    {
      key: 11,
      title: "Sales Week",
      start: "Sun Mar 10 2019 00:00:00 GMT+0300 (GMT+03:00)",
      end: "Sun Mar 17 2019 00:00:00 GMT+0300 (GMT+03:00)"
    },
    {
      key: 12,
      title: "Tax",
      start: "Wed Mar 27 2019 00:00:00 GMT+0300 (GMT+03:00)",
      end: "Thu Mar 28 2019 00:00:00 GMT+0300 (GMT+03:00)"
    },
    {
      key: 13,
      title: "Meeting",
      start: "Sun Apr 14 2019 00:00:00 GMT+0300 (GMT+03:00)",
      end: "Mon Apr 15 2019 00:00:00 GMT+0300 (GMT+03:00)"
    },
    {
      key: 14,
      title: "Delivery",
      start: "Mon Apr 22 2019 00:00:00 GMT+0300 (GMT+03:00)",
      end: "Fri Apr 26 2019 00:00:00 GMT+0300 (GMT+03:00)"
    },
    {
      key: 15,
      title: "Account",
      start: "Wed May 08 2019 00:00:00 GMT+0300 (GMT+03:00)",
      end: "Thu May 09 2019 00:00:00 GMT+0300 (GMT+03:00)"
    },
    {
      key: 16,
      title: "Shop Opening",
      start: "Tue May 14 2019 00:00:00 GMT+0300 (GMT+03:00)",
      end: "Thu May 16 2019 00:00:00 GMT+0300 (GMT+03:00)"
    },
    {
      key: 17,
      title: "Vacation",
      start: "Sun Jun 09 2019 00:00:00 GMT+0300 (GMT+03:00)",
      end: "Sun Jun 23 2019 00:00:00 GMT+0300 (GMT+03:00)"
    },
    {
      key: 18,
      title: "Account Inspection",
      start: "Tue Jul 09 2019 00:00:00 GMT+0300 (GMT+03:00)",
      end: "Sun Jul 14 2019 00:00:00 GMT+0300 (GMT+03:00)"
    },
    {
      key: 19,
      title: "Marketing",
      start: "Wed Jul 17 2019 00:00:00 GMT+0300 (GMT+03:00)",
      end: "Thu Jul 18 2019 00:00:00 GMT+0300 (GMT+03:00)"
    },
    {
      key: 20,
      title: "Delivery",
      start: "Sat Aug 10 2019 00:00:00 GMT+0300 (GMT+03:00)",
      end: "Sun Aug 11 2019 00:00:00 GMT+0300 (GMT+03:00)"
    },
    {
      key: 21,
      title: "Sales Week",
      start: "Sun Aug 18 2019 00:00:00 GMT+0300 (GMT+03:00)",
      end: "Sun Aug 25 2019 00:00:00 GMT+0300 (GMT+03:00)"
    },
    {
      key: 22,
      title: "Teem Workshop",
      start: "Fri Sep 13 2019 00:00:00 GMT+0300 (GMT+03:00)",
      end: "Sun Sep 15 2019 00:00:00 GMT+0300 (GMT+03:00)"
    },
    {
      key: 23,
      title: "Account Meeting",
      start: "Tue Oct 08 2019 00:00:00 GMT+0300 (GMT+03:00)",
      end: "Wed Oct 09 2019 00:00:00 GMT+0300 (GMT+03:00)"
    },
    {
      key: 23,
      title: "Vacation",
      start: "Mon Oct 21 2019 00:00:00 GMT+0300 (GMT+03:00)",
      end: "Sat Oct 26 2019 00:00:00 GMT+0300 (GMT+03:00)"
    },
    {
      key: 24,
      title: "Meeting",
      start: "Thu Nov 14 2019 00:00:00 GMT+0300 (GMT+03:00)",
      end: "Fri Nov 15 2019 00:00:00 GMT+0300 (GMT+03:00)"
    },
    {
      key: 25,
      title: "Sales Meeting",
      start: "Fri Nov 22 2019 00:00:00 GMT+0300 (GMT+03:00)",
      end: "Tue Nov 26 2019 00:00:00 GMT+0300 (GMT+03:00)"
    },
    {
      key: 26,
      title: "Account",
      start: "Sun Dec 08 2019 00:00:00 GMT+0300 (GMT+03:00)",
      end: "Mon Dec 09 2019 00:00:00 GMT+0300 (GMT+03:00)"
    },
    {
      key: 26,
      title: "Annual Meeting",
      start: "Tue Dec 24 2019 00:00:00 GMT+0300 (GMT+03:00)",
      end: "Wed Dec 25 2019 00:00:00 GMT+0300 (GMT+03:00)"
    }
  ]
export default data;
