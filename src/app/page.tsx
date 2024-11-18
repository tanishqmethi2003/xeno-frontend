// // "use client";
// // import React, { useEffect } from "react";
// // import { useRouter } from "next/navigation";
// // import { auth, googleProvider } from "../utils/firebase";

// // const Home: React.FC = () => {
// //   const router = useRouter();

// //   useEffect(() => {
// //     const unsubscribe = auth.onAuthStateChanged((user) => {
// //       if (user) {
// //         router.push("/dashboard");
// //       }
// //     });
// //     return () => unsubscribe();
// //   }, [router]);

// //   const signInWithGoogle = async () => {
// //     try {
// //       await googleProvider();
// //       router.push("/dashboard");
// //     } catch (error) {
// //       console.error("Error signing in with Google:", error);
// //     }
// //   };

// //   return (
// //     <div className="flex flex-col items-center justify-center min-h-screen py-12 ">
// //       <div className="flex flex-col items-center mb-8">
// //         <div className="bg-blue-500 rounded-full w-24 h-24 flex items-center justify-center mb-4">
// //           <svg
// //             width="70"
// //             height="18"
// //             viewBox="0 0 70 18"
// //             fill="none"
// //             xmlns="http://www.w3.org/2000/svg"
// //           >
// //             <path
// //               d="M5.73845 8.82232L0.266214 0.810976H4.22988L7.9717 6.57144L11.7283 0.810976H15.6772L10.1754 8.82232L15.9582 17.2038H11.9797L7.9717 11.0584L3.94888 17.2038H0L5.73845 8.82232ZM25.3201 0.5C26.7794 0.5 28.0316 0.801104 29.0768 1.40331C30.1219 2.00552 30.9255 2.85947 31.4875 3.96516C32.0495 5.07085 32.3305 6.39371 32.3305 7.93382V9.79964H21.4008C21.4403 11.3891 21.8642 12.6133 22.6728 13.4721C23.4911 14.331 24.6349 14.7605 26.104 14.7605C27.1491 14.7605 28.0858 14.6617 28.9141 14.4643C29.7522 14.257 30.6149 13.9559 31.5023 13.561V16.3894C30.6839 16.7744 29.8507 17.0558 29.0028 17.2335C28.1548 17.4112 27.1393 17.5 25.9561 17.5C24.3489 17.5 22.934 17.189 21.7114 16.5671C20.4987 15.9352 19.5472 14.9974 18.857 13.7535C18.1767 12.5096 17.8365 10.9646 17.8365 9.11847C17.8365 7.28221 18.1471 5.72241 18.7683 4.43903C19.3894 3.15563 20.262 2.17828 21.3861 1.50697C22.5101 0.835657 23.8214 0.5 25.3201 0.5ZM25.3201 3.12108C24.2257 3.12108 23.3383 3.47649 22.658 4.18729C21.9875 4.89809 21.5931 5.93962 21.4748 7.31187H28.9289C28.919 6.49244 28.7809 5.76685 28.5147 5.13502C28.2584 4.5032 27.864 4.00959 27.3316 3.65419C26.809 3.29879 26.1385 3.12108 25.3201 3.12108ZM44.7835 0.5C46.6273 0.5 48.0617 0.978804 49.0873 1.93641C50.1229 2.88415 50.6402 4.40941 50.6402 6.51218V17.2038H47.1647V7.16379C47.1647 5.89023 46.9034 4.93758 46.3808 4.30575C45.8582 3.66406 45.0497 3.34321 43.9553 3.34321C42.3678 3.34321 41.2635 3.83189 40.6423 4.80924C40.0311 5.78658 39.7254 7.20327 39.7254 9.05926V17.2038H36.2498V0.810976H38.9563L39.4444 3.03223H39.6366C39.9916 2.45964 40.4304 1.99071 40.9529 1.62544C41.4854 1.25029 42.077 0.968931 42.7277 0.781359C43.3884 0.593786 44.0736 0.5 44.7835 0.5ZM70 8.9704C70 10.3328 69.8226 11.5421 69.4678 12.5984C69.113 13.6548 68.5951 14.5482 67.9148 15.2788C67.2345 15.9994 66.4162 16.5523 65.4595 16.9373C64.5032 17.3125 63.4238 17.5 62.2209 17.5C61.0968 17.5 60.0665 17.3125 59.1294 16.9373C58.1929 16.5523 57.3794 15.9994 56.6894 15.2788C56.0091 14.5482 55.4817 13.6548 55.1067 12.5984C54.7322 11.5421 54.5447 10.3328 54.5447 8.9704C54.5447 7.16379 54.8552 5.63355 55.4764 4.37979C56.1077 3.11615 57.0048 2.1536 58.1683 1.49216C59.3318 0.830721 60.717 0.5 62.3243 0.5C63.833 0.5 65.1638 0.830721 66.3177 1.49216C67.4711 2.1536 68.373 3.11615 69.024 4.37979C69.675 5.64347 70 7.17366 70 8.9704ZM58.1241 8.9704C58.1241 10.1649 58.2669 11.1867 58.553 12.0357C58.8487 12.8847 59.302 13.5363 59.9136 13.9904C60.5247 14.4347 61.3136 14.6568 62.28 14.6568C63.2459 14.6568 64.0349 14.4347 64.6465 13.9904C65.2575 13.5363 65.7061 12.8847 65.9922 12.0357C66.2782 11.1867 66.421 10.1649 66.421 8.9704C66.421 7.77583 66.2782 6.76395 65.9922 5.93466C65.7061 5.09553 65.2575 4.45877 64.6465 4.02439C64.0349 3.58014 63.2411 3.35802 62.2651 3.35802C60.8256 3.35802 59.7756 3.84176 59.115 4.80924C58.4544 5.77671 58.1241 7.16379 58.1241 8.9704Z"
// //               fill="#fff"
// //             />
// //           </svg>
// //         </div>
// //         <h1 className="text-5xl font-bold text-gray-800 mb-4">
// //           Welcome to Xeno Mini CRM
// //         </h1>
// //         <p className="text-lg text-gray-600 text-center max-w-md">
// //           Xeno Mini CRM is your one-stop solution to manage and analyze your
// //           customer relationships effectively. From creating targeted campaigns
// //           to tracking your performance, Xeno Mini CRM helps you stay ahead.
// //         </p>
// //       </div>
// //       <button
// //         onClick={signInWithGoogle}
// //         className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full text-lg shadow-md hover:bg-blue-600 transition-all"
// //       >
// //         Sign in with Google
// //       </button>
// //     </div>
// //   );
// // };

// // export default Home;



// // 'use client'

// // import React, { useEffect } from "react"
// // import { useRouter } from "next/navigation"
// // import { auth, googleProvider } from "../utils/firebase"
// // import Button from '@mui/material/Button';
// // import { Card, CardContent, CardHeader, Typography } from "@mui/material";

// // <Card>
// //   <CardHeader
// //     title={<Typography variant="h6">Welcome</Typography>}
// //     subheader={<Typography variant="body2" color="textSecondary">This is the card description.</Typography>}
// //   />
// //   <CardContent>
// //     <Typography variant="body1">Here is some content inside the card.</Typography>
// //   </CardContent>
// // </Card>

// // import { ArrowRight, BarChart2, Users, Zap } from 'lucide-react'

// // export default function Component() {
// //   const router = useRouter()

// //   useEffect(() => {
// //     const unsubscribe = auth.onAuthStateChanged((user) => {
// //       if (user) {
// //         router.push("/dashboard")
// //       }
// //     })
// //     return () => unsubscribe()
// //   }, [router])

// //   const signInWithGoogle = async () => {
// //     try {
// //       await googleProvider()
// //       router.push("/dashboard")
// //     } catch (error) {
// //       console.error("Error signing in with Google:", error)
// //     }
// //   }

// //   return (
// //     <div className="flex min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 dark:from-gray-900 dark:to-gray-800">
// //       <div className="m-auto max-w-4xl w-full p-8">
// //         <Card className="backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 shadow-xl">
// //           <CardHeader className="text-center">
// //             <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 p-2">
// //               <div className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-gray-800">
// //                 <Zap className="h-10 w-10 text-purple-600 dark:text-purple-400" />
// //               </div>
// //             </div>
// //             <CardTitle className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
// //               Xeno Mini CRM
// //             </CardTitle>
// //             <CardDescription className="text-lg mt-2 max-w-md mx-auto">
// //               Empower your business with intelligent customer relationship management
// //             </CardDescription>
// //           </CardHeader>
// //           <CardContent>
// //             <div className="grid gap-6 md:grid-cols-3 mb-8">
// //               <div className="flex flex-col items-center text-center">
// //                 <Users className="h-10 w-10 mb-2 text-purple-600 dark:text-purple-400" />
// //                 <h3 className="font-semibold">Customer Insights</h3>
// //                 <p className="text-sm text-gray-600 dark:text-gray-300">Understand your customers better</p>
// //               </div>
// //               <div className="flex flex-col items-center text-center">
// //                 <BarChart2 className="h-10 w-10 mb-2 text-indigo-600 dark:text-indigo-400" />
// //                 <h3 className="font-semibold">Performance Tracking</h3>
// //                 <p className="text-sm text-gray-600 dark:text-gray-300">Monitor and improve your metrics</p>
// //               </div>
// //               <div className="flex flex-col items-center text-center">
// //                 <ArrowRight className="h-10 w-10 mb-2 text-blue-600 dark:text-blue-400" />
// //                 <h3 className="font-semibold">Streamlined Workflows</h3>
// //                 <p className="text-sm text-gray-600 dark:text-gray-300">Optimize your business processes</p>
// //               </div>
// //             </div>
// //             <div className="text-center">
// //               <Button
// //                 onClick={signInWithGoogle}
// //                 className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
// //               >
// //                 Get Started with Google
// //               </Button>
// //             </div>
// //           </CardContent>
// //         </Card>
// //       </div>
// //     </div>
// //   )
// // }



// // "use client"

// // import React, { useEffect } from "react"
// // import { useRouter } from "next/navigation"
// // import { auth, googleProvider } from "../utils/firebase"

// // const Home: React.FC = () => {
// //   const router = useRouter()

// //   useEffect(() => {
// //     const unsubscribe = auth.onAuthStateChanged((user) => {
// //       if (user) {
// //         router.push("/dashboard")
// //       }
// //     })
// //     return () => unsubscribe()
// //   }, [router])

// //   const signInWithGoogle = async () => {
// //     try {
// //       await googleProvider()
// //       router.push("/dashboard")
// //     } catch (error) {
// //       console.error("Error signing in with Google:", error)
// //     }
// //   }

// //   return (
// //     <div style={styles.container}>
// //       <div style={styles.content}>
// //         <div style={styles.logoContainer}>
// //           <svg width="70" height="18" viewBox="0 0 70 18" fill="none" xmlns="http://www.w3.org/2000/svg">
// //             <path
// //               d="M5.73845 8.82232L0.266214 0.810976H4.22988L7.9717 6.57144L11.7283 0.810976H15.6772L10.1754 8.82232L15.9582 17.2038H11.9797L7.9717 11.0584L3.94888 17.2038H0L5.73845 8.82232ZM25.3201 0.5C26.7794 0.5 28.0316 0.801104 29.0768 1.40331C30.1219 2.00552 30.9255 2.85947 31.4875 3.96516C32.0495 5.07085 32.3305 6.39371 32.3305 7.93382V9.79964H21.4008C21.4403 11.3891 21.8642 12.6133 22.6728 13.4721C23.4911 14.331 24.6349 14.7605 26.104 14.7605C27.1491 14.7605 28.0858 14.6617 28.9141 14.4643C29.7522 14.257 30.6149 13.9559 31.5023 13.561V16.3894C30.6839 16.7744 29.8507 17.0558 29.0028 17.2335C28.1548 17.4112 27.1393 17.5 25.9561 17.5C24.3489 17.5 22.934 17.189 21.7114 16.5671C20.4987 15.9352 19.5472 14.9974 18.857 13.7535C18.1767 12.5096 17.8365 10.9646 17.8365 9.11847C17.8365 7.28221 18.1471 5.72241 18.7683 4.43903C19.3894 3.15563 20.262 2.17828 21.3861 1.50697C22.5101 0.835657 23.8214 0.5 25.3201 0.5ZM25.3201 3.12108C24.2257 3.12108 23.3383 3.47649 22.658 4.18729C21.9875 4.89809 21.5931 5.93962 21.4748 7.31187H28.9289C28.919 6.49244 28.7809 5.76685 28.5147 5.13502C28.2584 4.5032 27.864 4.00959 27.3316 3.65419C26.809 3.29879 26.1385 3.12108 25.3201 3.12108ZM44.7835 0.5C46.6273 0.5 48.0617 0.978804 49.0873 1.93641C50.1229 2.88415 50.6402 4.40941 50.6402 6.51218V17.2038H47.1647V7.16379C47.1647 5.89023 46.9034 4.93758 46.3808 4.30575C45.8582 3.66406 45.0497 3.34321 43.9553 3.34321C42.3678 3.34321 41.2635 3.83189 40.6423 4.80924C40.0311 5.78658 39.7254 7.20327 39.7254 9.05926V17.2038H36.2498V0.810976H38.9563L39.4444 3.03223H39.6366C39.9916 2.45964 40.4304 1.99071 40.9529 1.62544C41.4854 1.25029 42.077 0.968931 42.7277 0.781359C43.3884 0.593786 44.0736 0.5 44.7835 0.5ZM70 8.9704C70 10.3328 69.8226 11.5421 69.4678 12.5984C69.113 13.6548 68.5951 14.5482 67.9148 15.2788C67.2345 15.9994 66.4162 16.5523 65.4595 16.9373C64.5032 17.3125 63.4238 17.5 62.2209 17.5C61.0968 17.5 60.0665 17.3125 59.1294 16.9373C58.1929 16.5523 57.3794 15.9994 56.6894 15.2788C56.0091 14.5482 55.4817 13.6548 55.1067 12.5984C54.7322 11.5421 54.5447 10.3328 54.5447 8.9704C54.5447 7.16379 54.8552 5.63355 55.4764 4.37979C56.1077 3.11615 57.0048 2.1536 58.1683 1.49216C59.3318 0.830721 60.717 0.5 62.3243 0.5C63.833 0.5 65.1638 0.830721 66.3177 1.49216C67.4711 2.1536 68.373 3.11615 69.024 4.37979C69.675 5.64347 70 7.17366 70 8.9704ZM58.1241 8.9704C58.1241 10.1649 58.2669 11.1867 58.553 12.0357C58.8487 12.8847 59.302 13.5363 59.9136 13.9904C60.5247 14.4347 61.3136 14.6568 62.28 14.6568C63.2459 14.6568 64.0349 14.4347 64.6465 13.9904C65.2575 13.5363 65.7061 12.8847 65.9922 12.0357C66.2782 11.1867 66.421 10.1649 66.421 8.9704C66.421 7.77583 66.2782 6.76395 65.9922 5.93466C65.7061 5.09553 65.2575 4.45877 64.6465 4.02439C64.0349 3.58014 63.2411 3.35802 62.2651 3.35802C60.8256 3.35802 59.7756 3.84176 59.115 4.80924C58.4544 5.77671 58.1241 7.16379 58.1241 8.9704Z"
// //               fill="#fff"
// //             />
// //           </svg>
// //         </div>
// //         <h1 style={styles.title}>Welcome to Xeno Mini CRM</h1>
// //         <p style={styles.description}>
// //           Xeno Mini CRM is your one-stop solution to manage and analyze your customer relationships effectively. From
// //           creating targeted campaigns to tracking your performance, Xeno Mini CRM helps you stay ahead.
// //         </p>
// //       </div>
// //       <button onClick={signInWithGoogle} style={styles.button}>
// //         Sign in with Google
// //       </button>
// //     </div>
// //   )
// // }

// // const styles: { [key: string]: React.CSSProperties } = {
// //   container: {
// //     display: "flex",
// //     flexDirection: "column",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     minHeight: "100vh",
// //     backgroundColor: "#f5e6d3",
// //     padding: "2rem",
// //     fontFamily: "Arial, sans-serif",
// //   },
// //   content: {
// //     display: "flex",
// //     flexDirection: "column",
// //     alignItems: "center",
// //     maxWidth: "600px",
// //     textAlign: "center",
// //   },
// //   logoContainer: {
// //     backgroundColor: "#8b4513",
// //     borderRadius: "50%",
// //     width: "96px",
// //     height: "96px",
// //     display: "flex",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     marginBottom: "2rem",
// //   },
// //   title: {
// //     fontSize: "2.5rem",
// //     fontWeight: "bold",
// //     color: "#4a3728",
// //     marginBottom: "1rem",
// //   },
// //   description: {
// //     fontSize: "1.125rem",
// //     color: "#6b5d4f",
// //     marginBottom: "2rem",
// //     lineHeight: 1.5,
// //   },
// //   button: {
// //     padding: "0.75rem 1.5rem",
// //     backgroundColor: "#8b4513",
// //     color: "white",
// //     border: "none",
// //     borderRadius: "9999px",
// //     fontSize: "1.125rem",
// //     fontWeight: "bold",
// //     cursor: "pointer",
// //     transition: "background-color 0.3s ease",
// //     marginTop: "1.5rem",
// //   },
// // }

// // export default Home


// // "use client"

// // import React, { useEffect } from "react"
// // import { useRouter } from "next/navigation"
// // import { auth, googleProvider } from "../utils/firebase"

// // const Home: React.FC = () => {
// //   const router = useRouter()

// //   useEffect(() => {
// //     const unsubscribe = auth.onAuthStateChanged((user) => {
// //       if (user) {
// //         router.push("/dashboard")
// //       }
// //     })
// //     return () => unsubscribe()
// //   }, [router])

// //   const signInWithGoogle = async () => {
// //     try {
// //       await googleProvider()
// //       router.push("/dashboard")
// //     } catch (error) {
// //       console.error("Error signing in with Google:", error)
// //     }
// //   }

// //   return (
// //     <div style={styles.container}>
// //       <div style={styles.content}>
// //         <div style={styles.logoContainer}>
// //           <svg width="70" height="18" viewBox="0 0 70 18" fill="none" xmlns="http://www.w3.org/2000/svg">
// //             <path
// //               d="M5.73845 8.82232L0.266214 0.810976H4.22988L7.9717 6.57144L11.7283 0.810976H15.6772L10.1754 8.82232L15.9582 17.2038H11.9797L7.9717 11.0584L3.94888 17.2038H0L5.73845 8.82232ZM25.3201 0.5C26.7794 0.5 28.0316 0.801104 29.0768 1.40331C30.1219 2.00552 30.9255 2.85947 31.4875 3.96516C32.0495 5.07085 32.3305 6.39371 32.3305 7.93382V9.79964H21.4008C21.4403 11.3891 21.8642 12.6133 22.6728 13.4721C23.4911 14.331 24.6349 14.7605 26.104 14.7605C27.1491 14.7605 28.0858 14.6617 28.9141 14.4643C29.7522 14.257 30.6149 13.9559 31.5023 13.561V16.3894C30.6839 16.7744 29.8507 17.0558 29.0028 17.2335C28.1548 17.4112 27.1393 17.5 25.9561 17.5C24.3489 17.5 22.934 17.189 21.7114 16.5671C20.4987 15.9352 19.5472 14.9974 18.857 13.7535C18.1767 12.5096 17.8365 10.9646 17.8365 9.11847C17.8365 7.28221 18.1471 5.72241 18.7683 4.43903C19.3894 3.15563 20.262 2.17828 21.3861 1.50697C22.5101 0.835657 23.8214 0.5 25.3201 0.5ZM25.3201 3.12108C24.2257 3.12108 23.3383 3.47649 22.658 4.18729C21.9875 4.89809 21.5931 5.93962 21.4748 7.31187H28.9289C28.919 6.49244 28.7809 5.76685 28.5147 5.13502C28.2584 4.5032 27.864 4.00959 27.3316 3.65419C26.809 3.29879 26.1385 3.12108 25.3201 3.12108ZM44.7835 0.5C46.6273 0.5 48.0617 0.978804 49.0873 1.93641C50.1229 2.88415 50.6402 4.40941 50.6402 6.51218V17.2038H47.1647V7.16379C47.1647 5.89023 46.9034 4.93758 46.3808 4.30575C45.8582 3.66406 45.0497 3.34321 43.9553 3.34321C42.3678 3.34321 41.2635 3.83189 40.6423 4.80924C40.0311 5.78658 39.7254 7.20327 39.7254 9.05926V17.2038H36.2498V0.810976H38.9563L39.4444 3.03223H39.6366C39.9916 2.45964 40.4304 1.99071 40.9529 1.62544C41.4854 1.25029 42.077 0.968931 42.7277 0.781359C43.3884 0.593786 44.0736 0.5 44.7835 0.5ZM70 8.9704C70 10.3328 69.8226 11.5421 69.4678 12.5984C69.113 13.6548 68.5951 14.5482 67.9148 15.2788C67.2345 15.9994 66.4162 16.5523 65.4595 16.9373C64.5032 17.3125 63.4238 17.5 62.2209 17.5C61.0968 17.5 60.0665 17.3125 59.1294 16.9373C58.1929 16.5523 57.3794 15.9994 56.6894 15.2788C56.0091 14.5482 55.4817 13.6548 55.1067 12.5984C54.7322 11.5421 54.5447 10.3328 54.5447 8.9704C54.5447 7.16379 54.8552 5.63355 55.4764 4.37979C56.1077 3.11615 57.0048 2.1536 58.1683 1.49216C59.3318 0.830721 60.717 0.5 62.3243 0.5C63.833 0.5 65.1638 0.830721 66.3177 1.49216C67.4711 2.1536 68.373 3.11615 69.024 4.37979C69.675 5.64347 70 7.17366 70 8.9704ZM58.1241 8.9704C58.1241 10.1649 58.2669 11.1867 58.553 12.0357C58.8487 12.8847 59.302 13.5363 59.9136 13.9904C60.5247 14.4347 61.3136 14.6568 62.28 14.6568C63.2459 14.6568 64.0349 14.4347 64.6465 13.9904C65.2575 13.5363 65.7061 12.8847 65.9922 12.0357C66.2782 11.1867 66.421 10.1649 66.421 8.9704C66.421 7.77583 66.2782 6.76395 65.9922 5.93466C65.7061 5.09553 65.2575 4.45877 64.6465 4.02439C64.0349 3.58014 63.2411 3.35802 62.2651 3.35802C60.8256 3.35802 59.7756 3.84176 59.115 4.80924C58.4544 5.77671 58.1241 7.16379 58.1241 8.9704Z"
// //               fill="#fff"
// //             />
// //           </svg>
// //         </div>
// //         <h1 style={styles.title}>Xeno: The Future of CRM</h1>
// //         <ul style={styles.description}>
// //   <li>One-stop solution to manage and analyze your CRM</li>
// //  <li>From creating targeted campaigns to tracking your performance,</li>
// //   <li>AI-powered customer engagement platform purpose-built for retailers
// // </li>
// // </ul>

// //       </div>
// //       <button onClick={signInWithGoogle} style={styles.button}>
// //         Sign in with Google
// //       </button>
// //     </div>
// //   )
// // }

// // const styles: { [key: string]: React.CSSProperties } = {
// //   container: {
// //     display: "flex",
// //     flexDirection: "column",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     minHeight: "100vh",
// //     backgroundColor: "#f5e6d3",
// //     padding: "2rem",
// //     fontFamily: "Arial, sans-serif",
// //   },
// //   content: {
// //     display: "flex",
// //     flexDirection: "column",
// //     alignItems: "center",
// //     maxWidth: "600px",
// //     textAlign: "center",
// //   },
// //   logoContainer: {
// //     backgroundColor: "#8b4513",
// //     borderRadius: "50%",
// //     width: "96px",
// //     height: "96px",
// //     display: "flex",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     marginBottom: "2rem",
// //   },
// //   title: {
// //     fontSize: "2.5rem",
// //     fontWeight: "bold",
// //     color: "#4a3728",
// //     marginBottom: "1rem",
// //   },
// //   description: {
// //     fontSize: "1.125rem",
// //     color: "#6b5d4f",
// //     marginBottom: "2rem",
// //     lineHeight: 1.5,
// //   },
// //   button: {
// //     padding: "0.75rem 1.5rem",
// //     backgroundColor: "#8b4513",
// //     color: "white",
// //     border: "none",
// //     borderRadius: "9999px",
// //     fontSize: "1.125rem",
// //     fontWeight: "bold",
// //     cursor: "pointer",
// //     transition: "background-color 0.3s ease",
// //     marginTop: "1.5rem",
// //   },
// // }

// // export default Home


// // 'use client'

// // import React, { useEffect } from "react"
// // import { useRouter } from "next/navigation"
// // import { auth, googleProvider } from "../utils/firebase"

// // const Home: React.FC = () => {
// //   const router = useRouter()

// //   useEffect(() => {
// //     const unsubscribe = auth.onAuthStateChanged((user) => {
// //       if (user) {
// //         router.push("/dashboard")
// //       }
// //     })
// //     return () => unsubscribe()
// //   }, [router])

// //   const signInWithGoogle = async () => {
// //     try {
// //       await googleProvider()
// //       router.push("/dashboard")
// //     } catch (error) {
// //       console.error("Error signing in with Google:", error)
// //     }
// //   }

// //   return (
// //     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 p-4 text-white">
// //       <div className="w-full max-w-md space-y-8 text-center">
// //         <div className="flex flex-col items-center space-y-4">
// //           <div className="bg-white p-4 rounded-full shadow-lg">
// //             <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
// //               <path d="M40 0L80 20V60L40 80L0 60V20L40 0Z" fill="url(#paint0_linear)" />
// //               <path d="M20 30L40 40L60 30V50L40 60L20 50V30Z" fill="white" />
// //               <defs>
// //                 <linearGradient id="paint0_linear" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
// //                   <stop stopColor="#8B5CF6" />
// //                   <stop offset="1" stopColor="#EC4899" />
// //                 </linearGradient>
// //               </defs>
// //             </svg>
// //           </div>
// //           <h1 className="text-4xl font-bold tracking-tight">Xeno: The Future of CRM</h1>
// //         </div>
// //         <ul className="space-y-2 text-lg">
// //           <li>One-stop solution to manage and analyze your CRM</li>
// //           {/* <li>From creating targeted campaigns to tracking your performance</li>
// //           <li>AI-powered customer engagement platform purpose-built for retailers</li> */}
// //         </ul>
// //         <button
// //           onClick={signInWithGoogle}
// //           className="w-full py-3 px-4 bg-white text-purple-600 rounded-full text-lg font-semibold shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
// //         >
// //           Sign in with Google
// //         </button>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Home



// // 'use client'

// // import React, { useEffect } from "react"
// // import { useRouter } from "next/navigation"
// // import { auth, googleProvider } from "../utils/firebase"

// // const Home: React.FC = () => {
// //   const router = useRouter()

// //   useEffect(() => {
// //     const unsubscribe = auth.onAuthStateChanged((user) => {
// //       if (user) {
// //         router.push("/dashboard")
// //       }
// //     })
// //     return () => unsubscribe()
// //   }, [router])

// //   const signInWithGoogle = async () => {
// //     try {
// //       await googleProvider()
// //       router.push("/dashboard")
// //     } catch (error) {
// //       console.error("Error signing in with Google:", error)
// //     }
// //   }

// //   return (
// //     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 p-4 text-white">
// //       <div className="w-full max-w-md space-y-8 text-center">
// //         <div className="flex flex-col items-center space-y-4">
// //           <div className="bg-white p-4 rounded-full shadow-lg">
// //             <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
// //               <path d="M40 0L80 20V60L40 80L0 60V20L40 0Z" fill="url(#paint0_linear)" />
// //               <path d="M20 30L40 40L60 30V50L40 60L20 50V30Z" fill="white" />
// //               <defs>
// //                 <linearGradient id="paint0_linear" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
// //                   <stop stopColor="#8B5CF6" />
// //                   <stop offset="1" stopColor="#EC4899" />
// //                 </linearGradient>
// //               </defs>
// //             </svg>
// //           </div>
// //           <h1 className="text-4xl font-bold tracking-tight">Xeno: The Future of CRM</h1>
// //         </div>
// //         <ul className="space-y-2 text-lg">
// //           <li>One-stop solution to manage and analyze your CRM</li>
// //           <li>From creating targeted campaigns to tracking your performance</li>
// //           <li>AI-powered customer engagement platform purpose-built for retailers</li>
// //         </ul>
// //         <button
// //           onClick={signInWithGoogle}
// //           className="w-full py-3 px-4 bg-white text-purple-600 rounded-full text-lg font-semibold shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
// //         >
// //           Sign in with Google
// //         </button>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Home


// 'use client'

// import React, { useEffect } from "react"
// import { useRouter } from "next/navigation"
// import { auth, googleProvider } from "../utils/firebase"

// const Home: React.FC = () => {
//   const router = useRouter()

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         router.push("/dashboard")
//       }
//     })
//     return () => unsubscribe()
//   }, [router])

//   const signInWithGoogle = async () => {
//     try {
//       await googleProvider()
//       router.push("/dashboard")
//     } catch (error) {
//       console.error("Error signing in with Google:", error)
//     }
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4 text-white">
//       <div className="w-full max-w-lg space-y-10 text-center bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-8 shadow-lg">
//         {/* Logo */}
//         <div className="flex flex-col items-center space-y-6">
//           <div className="bg-white p-5 rounded-full shadow-xl">
//             <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M40 0L80 20V60L40 80L0 60V20L40 0Z" fill="url(#paint0_linear)" />
//               <path d="M20 30L40 40L60 30V50L40 60L20 50V30Z" fill="white" />
//               <defs>
//                 <linearGradient id="paint0_linear" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
//                   <stop stopColor="#8B5CF6" />
//                   <stop offset="1" stopColor="#EC4899" />
//                 </linearGradient>
//               </defs>
//             </svg>
//           </div>
//           <h1 className="text-5xl font-extrabold tracking-tight text-white">Welcome to XENO</h1>
//           {/* <p className="text-lg font-light max-w-sm text-white">
//             Your gateway to streamlined customer relationship management with AI-powered tools and insights.
//           </p> */}
//         </div>

//         {/* Features List */}
//         <ul className="space-y-4 text-left text-lg">
//           <li className="flex items-center space-x-3">
//             <span className="bg-white bg-opacity-50 p-2 rounded-full">
//               <svg className="w-6 h-6 text-purple-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                 <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 15h-2v-2h2zm0-4h-2V7h2z" />
//               </svg>
//             </span>
//             <span>One-stop solution to manage and analyze your CRM</span>
//           </li>
//           <li className="flex items-center space-x-3">
//             <span className="bg-white bg-opacity-50 p-2 rounded-full">
//               <svg className="w-6 h-6 text-purple-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                 <path d="M19.36 4.22l-1.42-1.42L12 8.75 6.06 3.05 4.64 4.47l6.94 6.94-6.94 6.94 1.42 1.42L12 13.06l6.94 6.94 1.42-1.42-6.94-6.94z" />
//               </svg>
//             </span>
//             <span>From creating targeted campaigns to tracking your performance</span>
//           </li>
//           <li className="flex items-center space-x-3">
//             <span className="bg-white bg-opacity-50 p-2 rounded-full">
//               <svg className="w-6 h-6 text-purple-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                 <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm-1-10V5h2v7h-2zm0 4v-2h2v2h-2z" />
//               </svg>
//             </span>
//             <span>AI-powered customer engagement platform purpose-built for retailers</span>
//           </li>
//         </ul>

//         {/* Sign-in Button */}
//         <button
//           onClick={signInWithGoogle}
//           className="w-full py-3 px-4 bg-white text-purple-600 rounded-full text-lg font-semibold shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
//         >
//           Sign in with Google
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Home




'use client'

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth, googleProvider } from "../utils/firebase";

const Home: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        router.push("/dashboard");
      }
    });
    return () => unsubscribe();
  }, [router]);

  const signInWithGoogle = async () => {
    try {
      await googleProvider();
      router.push("/dashboard");
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-md p-8 text-center">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <img
            src="data:image/jpeg;base64,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" // Replace with the actual path to XENO logo
            alt="XENO Logo"
            className="h-16"
          />
        </div>

        {/* Welcome Section */}
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
          Welcome to XENO
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Your gateway to streamlined customer relationship management with AI-powered tools and insights.
        </p>

        {/* Features Section */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5vuAmMbwzNa0PpKo1v08_nci5dxToXfyw7A&s" // Replace with relevant image
              alt="CRM Management"
              className="h-24 mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              One-Stop CRM Solution
            </h3>
            <p className="text-gray-600 text-sm">
              Manage and analyze your customer relationships effortlessly.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="data:image/jpeg;base64,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" // Replace with relevant image
              alt="Campaigns"
              className="h-24 mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Targeted Campaigns
            </h3>
            <p className="text-gray-600 text-sm">
              Create impactful campaigns and track performance effectively.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUf5zkwTFE1Fn3REnStA0LacekOeWuDQPezg&s" // Replace with relevant image
              alt="AI Engagement"
              className="h-24 mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              AI-Powered Engagement
            </h3>
            <p className="text-gray-600 text-sm">
              Enhance customer engagement with cutting-edge AI solutions.
            </p>
          </div>
        </div>

        {/* Sign-In Button */}
        <button
          onClick={signInWithGoogle}
          className="mt-8 w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition-transform transform hover:scale-105"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Home;
