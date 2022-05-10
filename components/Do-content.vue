<template>
  <div>
    <p class="text-regular text-gray">{{ $t('example.good.body.text1') }}</p>
    <p class="text-regular text-gray">
      {{ $t('example.good.body.list_start') }}
    </p>
    <ul>
      <li class="text-regular text-gray">
        {{ $t('example.good.body.list1') }}
      </li>
      <li class="text-regular text-gray">
        {{ $t('example.good.body.list2') }}
      </li>
      <li class="text-regular text-gray">
        {{ $t('example.good.body.list3') }}
      </li>
      <li class="text-regular text-gray">
        {{ $t('example.good.body.list4') }}
      </li>
      <li class="text-regular text-gray">
        {{ $t('example.good.body.list5') }}
      </li>
    </ul>
    <p class="text-regular text-gray">{{ $t('example.good.body.list_end') }}</p>
    <p class="text-regular text-gray">{{ $t('example.good.body.end') }}</p>
  </div>
</template>

<style scoped>
p {
  text-align: justify;
  font-size: 1rem;
}

ul li {
  font-size: 1rem;
  list-style: none;
}
</style>
