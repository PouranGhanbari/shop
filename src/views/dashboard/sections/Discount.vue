<template>
    <div>
        <a-card style="width: 300px;    background: #dfffee;height: 280px;    border-radius: 20px;">
            <div class="icon-discount">
                <TagOutlined />
                <h6>
                    Discount
                </h6>
            </div>
            <div>
                <img src="@/assets/img/discount.jpg" class="img" alt="">
            </div>
            <!-- -------- -->

            <div class="discount-amount">
                <div class="amount">
                    <span class="discount1">{{ discountPercentage }}%</span>
                    <span class="discount2"> Since last week </span>
                </div>
                <p class="amount1"> ${{ discountAmount }}</p>
            </div>
        </a-card>
    </div>
</template>

<script lang="ts" setup>
import { TagOutlined } from "@ant-design/icons-vue";
import { ref } from "vue";

const discountPercentage = ref<number>(23)
const discountAmount = ref<number>(343)
</script>

<style>
.icon-discount {
    display: flex;
}

.img {
    margin: 5px 0px;
}

.amount {
    font-size: 11px;
}

.discount1 {
    font-weight: bold;
}

.discount2 {
    color: #979797;
}

.amount1 {
    font-size: 25px;
    font-weight: bold;

}
</style>