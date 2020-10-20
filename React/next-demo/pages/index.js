import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h2>测试</h2><Link href="/about">关于</Link>
      <ul>
        <li>呀哈哈</li>
        <li>呀哈哈</li>
        <li>呀哈哈</li>
        <li>呀哈哈</li>
        <li>呀哈哈</li>
        <li>呀哈哈</li>
      </ul>
    </div>
  );
}
