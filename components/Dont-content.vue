<template>
  <div>
    <p class="text-regular text-gray">{{ $t('example.bad.body.text1') }}</p>
    <p class="text-regular text-gray">{{ $t('example.bad.body.text2') }}</p>
    <p class="text-regular text-gray">
      {{ $t('example.bad.body.list_start') }}
    </p>
    <ul>
      <li class="text-regular text-gray">{{ $t('example.bad.body.list1') }}</li>
      <li class="text-regular text-gray">{{ $t('example.bad.body.list2') }}</li>
      <li class="text-regular text-gray">{{ $t('example.bad.body.list3') }}</li>
      <li class="text-regular text-gray">{{ $t('example.bad.body.list4') }}</li>
      <li class="text-regular text-gray">{{ $t('example.bad.body.list5') }}</li>
    </ul>
    <p class="text-regular text-gray">{{ $t('example.bad.body.list_end') }}</p>
    <p class="text-regular text-gray">{{ $t('example.bad.body.end') }}</p>
  </div>
</template>

<style scoped>
p {
  text-align: justify;
  font-size: 1rem;
  color: #636363;
}

ul li {
  font-size: 1rem;
  color: #636363;
  list-style: none;
}
</style>
