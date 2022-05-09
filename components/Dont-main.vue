<template>
  <div class="pt-5 pb-lg-5">
    <h3>{{ $t('example.bad.header') }}</h3>
    <b-row class="mt-3">
      <b-col cols="12" lg="5">
        <Dont-chat />
      </b-col>
      <b-col cols="12" lg="7" class="px-5 my-5 my-lg-auto">
        <Dont-content />
      </b-col>
    </b-row>
  </div>
</template>

<style scoped>
h3 {
  font-weight: 600;
}
</style>
