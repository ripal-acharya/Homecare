import React from "react"
import Layout from "../components/layout3"
import 'antd/dist/antd.css';
import { Button, Card, Icon } from 'antd';
export default () => (
    <Layout>
        <div style={{ margin: `3rem auto`, maxWidth: 1000, padding: `0 1rem` }}></div>
        <h2>Are You A Five-Star Healthcare Provider?</h2>
        <h4>List your business to reach millions of patients.</h4>
        <li>i'm not selling insurance </li>
        <li>Atteract and engage new patients</li>
        <li>Build and strengthen your online reputation</li>
        <li>Deliver a premium experience patients love</li>

        <Card title="Company Name" style={{ margin: '0 auto', marginRight: '1rem', marginTop: '-13rem', width: 300 }}>
            <div>Service Category</div>
            <Icon type="star" theme="filled" />
            <Icon type="star" theme="filled" />
            <Icon type="star" theme="filled" />
            <Icon type="star" theme="filled" />
            <p>Card content</p>
            <p><Button type="primary" style={{ marginRight: '1rem', marginLeft: '1rem' }}>Call us </Button>
                <Button type="primary" style={{ marginRight: '2rem', marginLeft: '2rem' }}>details</Button></p>

        </Card>
        <Button type="primary" >List your business on Homecare2Go</Button>
    </Layout>

)