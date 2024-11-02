<template>
  <div class="footer flex justify-between p-8">
    <div class="bookstore-description">
      <h1 class="text-2xl text-des">bookstore description</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos impedit
        eveniet repellat eos quae voluptatibus ut quidem, voluptatum at sequi! Optio autem
        aliquid, exercitationem excepturi necessitatibus esse animi dolore nesciunt.
      </p>
    </div>
    <!-- ---- -->
    <div class="about-us">
      <h3>About Us</h3>
      <ul>
        <li v-for="item in aboutUs">
          {{ item }}
        </li>
      </ul>
    </div>
    <!-- ---- -->
    <div class="policies">
      <h3>Policies</h3>
      <ul>
        <li v-for="item in policies">
          {{ item }}
        </li>
      </ul>
    </div>
    <!-- --- -->
    <div class="phone">
      <p>Phone: +90 _ <span style="color: #16a34a">5469047740</span></p>
      <p>supprt@competitions.amirfx.com</p>
    </div>

    <div class="contact-us flex gap-2">
      <TwitterOutlined class="text-2xl" />
      <LinkedinOutlined class="text-2xl" />
      <GoogleOutlined class="text-2xl" />
      <InstagramOutlined class="text-2xl" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  TwitterOutlined,
  LinkedinOutlined,
  GoogleOutlined,
  InstagramOutlined,
} from "@ant-design/icons-vue";
const aboutUs = ["About Us", "Contact Us", "Affiliate Program"];
const policies = [
  "Terms and Conditions",
  "Privacy Policy",
  "Refund Policy",
  "Legal Notices",
];
</script>

<style>
.footer {
  background-color: #dcfce7;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.bookstore-description {
  width: 35%;
}

.text-des,
h1,
h3 {
  font-weight: bold !important;
}
</style>
