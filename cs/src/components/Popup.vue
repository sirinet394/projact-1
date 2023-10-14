<template>
    <div clss="popup">
        <div class="popup-inner">
            <slot />
            <botton class="popup-close">close</botton>
        </div>
    </div>
</template>
<script>
export default{

}
</script>
<style lang="scss" scoped>
.popup{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    background-color: rgba($color: #b9b9b9, $alpha: 1.0);

    display: flex;
    align-items: center;
    justify-content: center;

    .popup-inner{
        background-color: rgba($color: #ffffff, $alpha: 1.0);
        padding: 32px;
    }
}

</style>