<template>
    <div>
        <a-card style="width: 300px;    background: #dfffee;height: 280px;    border-radius: 20px;">
            <div class="icon-wallet">
                <DollarOutlined />
                <h6>
                    Wallet
                </h6>
            </div>
            <!-- -------- -->

            <div class="wallet-amount">
                <p class="mony"> ${{walletAmount }}</p>
            </div>
        </a-card>
    </div>
</template>

<script lang="ts" setup>
import { DollarOutlined  } from "@ant-design/icons-vue";
import { ref } from "vue";

const walletAmount = ref<number>(343)
</script>

<style scoped>
.icon-wallet {
    display: flex;
}

.img {
    margin: 5px 0px;
}

.mony {
    font-size: 25px;
    font-weight: bold;

}
</style>