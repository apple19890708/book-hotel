<script setup lang="ts">
import Layout from "@/components/Layouts/Index.vue";
import { RouterView, useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <Layout isHiddenFooter type="styleDisabled">
    <section class="row m-0 login-layout">
      <div class="col-lg-6 image-bg d-none d-lg-block"></div>
      <div class="col-lg-6 d-flex justify-content-center p-3 form-content">
        <img class="deco-img" alt="deco" />
        <RouterView
          class="w-100"
          :class="[{ 'is-login': route.name === 'login' }]"
        />
      </div>
    </section>
  </Layout>
</template>

<style scoped lang="scss">
.login-layout {
  background-color: $neutral-dark;
  color: white;
  min-height: calc(100vh - 120px); //減去header
  position: relative;
  overflow: hidden;
  .image-bg {
    background-image: url("https://images.unsplash.com/photo-1630587148265-761cbd139043?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    background-size: cover;
    background-position: center;
    z-index: 1;
  }
  .form-content {
    align-items: center;
    .form-area {
      max-width: 416px;
      z-index: 1;
    }
    .deco-img {
      position: absolute;
      top: 72px;
      right: 0;
      content: url("@/assets/loginDeco.svg");
    }
  }
  @include media-breakpoint-down(lg) {
    min-height: calc(100vh - 72px);
    .form-content {
      align-items: normal;
      .form-area {
        max-width: 335px;
        &.is-login {
          padding-top: 92px;
        }
      }
      .deco-img {
        top: 32px;
        content: url("@/assets/loginDecoMobile.svg");
        width: 100%;
      }
    }
  }
  @media (max-width: 376px) {
    .is-login {
      padding-top: 30px !important;
    }
  }
}
</style>
