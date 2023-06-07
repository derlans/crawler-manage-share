<template>
  <input type="file" @change="handleChange" webkitdirectory directory multiple />
</template>

<script lang="ts" setup>
  // 上传文件夹
  const handleChange = (e: Event) => {
    const files = (e.target as HTMLInputElement).files;
    console.log(files);
  };
</script>

<style lang="less" scoped></style>
