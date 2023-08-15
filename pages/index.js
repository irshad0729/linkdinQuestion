import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./components/eyrc/layouts/Header";
import Footer from "./components/eyrc/layouts/Footer";
import HomePage from "./components/eyrc/layouts/HomePage";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <HomePage />
      {/* <Footer /> */}
    </>
  );
}
