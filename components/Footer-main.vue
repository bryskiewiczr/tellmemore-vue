<template>
  <footer>
    <p>
      {{ $t('footer.footer_note1') }}
    </p>
    <p>
      {{ $t('footer.footer_note2') }}
    </p>
    <p>
      {{ $t('footer.footer_warning') }}
    </p>
    <p>
      {{ $t('footer.footer_inspiration1')
      }}<a class="link" href="https://www.nohello.net">{{
        $t('footer.footer_inspiration_nohello')
      }}</a
      >. {{ $t('footer.footer_inspiration2')
      }}<a class="link" href="https://www.imdb.com/title/tt0386676/">{{
        $t('footer.footer_inspiration_office')
      }}</a
      >. {{ $t('footer.footer_inspiration3')
      }}<a class="link" href="https://github.com/bryskiewiczr/tellmemore-vue">{{
        $t('footer.footer_inspiration_github')
      }}</a
      >.
    </p>
    <p>
      {{ $t('footer.footer_lang') }}
      <a class="link" href="/">{{ $t('footer.footer_lang_en') }}</a
      >, <a class="link" href="/pl">{{ $t('footer.footer_lang_pl') }}</a
      >{{ $t('footer.footer_lang_nontech') }}
      <a class="link" href="/nt/en">{{ $t('footer.footer_lang_en') }}</a
      >,
      <a class="link" href="/nt/pl">{{ $t('footer.footer_lang_pl') }}</a>
    </p>
  </footer>
</template>

<style scoped>
footer {
  padding-top: 3em;
  padding-bottom: 3em;
}

p {
  text-align: justify;
  font-size: 0.8rem;
}

.link {
  color: #f5428a;
  text-decoration: underline;
  font-style: italic;
  cursor: pointer;
}
</style>
