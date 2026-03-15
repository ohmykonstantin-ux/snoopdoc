export default function App() {
  const topMetrics = [
    { value: '51–146', label: 'Клиентов к декабрю' },
    { value: '1,7–5,5 млн ₽', label: 'Выручка за год' },
    { value: 'Июл — Окт', label: 'Безубыточность' },
    { value: '1,5 млн ₽', label: 'Раунд инвестиций' },
    { value: '3', label: 'Сценария развития' },
  ];

  const scenarios = [
    {
      name: 'Негативный сценарий',
      short: 'Медленный рост',
      clients: '51 клиент',
      revenue: '1,7 млн ₽',
      monthly: '276 тыс. ₽',
      breakeven: 'Декабрь 2026',
      featured: false,
    },
    {
      name: 'Консервативный сценарий',
      short: 'Основной',
      clients: '90 клиентов',
      revenue: '3,558 млн ₽',
      monthly: '635 тыс. ₽',
      breakeven: 'Июль 2026',
      featured: true,
    },
    {
      name: 'Позитивный сценарий',
      short: 'Быстрый рост',
      clients: '146 клиентов',
      revenue: '5,5 млн ₽',
      monthly: '1,02 млн ₽',
      breakeven: 'Октябрь 2026',
      featured: false,
    },
  ];

  const audience = ['Видеопродакшн', 'Студии графики', 'Кинопродакшн', 'Ивент-агентства', 'BTL', 'Digital'];

  const horizon = [
    { year: '2026', revenue: 4.5, costs: 5.3, profit: -0.8 },
    { year: '2027', revenue: 16, costs: 10, profit: 6 },
    { year: '2028', revenue: 35, costs: 20, profit: 15 },
  ];

  const reportBlocks = [
    {
      title: 'Формат взаимодействия',
      points: [
        'Ежемесячный короткий отчёт по проекту: выручка, расходы, остаток денег, ключевые события, статус продукта и продаж.',
        'Квартальный созвон по стратегии: что сработало, что не сработало, какие следующие гипотезы и приоритеты.',
        'Операционное управление остаётся за основателем и командой проекта без микроменеджмента со стороны инвестора.',
      ],
    },
    {
      title: 'Финансовый учёт и прозрачность',
      points: [
        'Финансовый учёт и бухгалтерию ведёт Надежда в рамках функции холдинга.',
        'Инвестор получает регулярную понятную отчётность, но без режима согласования каждой транзакции и без права тормозить операционную работу проекта.',
        'Основатель распоряжается бюджетом по своему усмотрению в рамках целей проекта, включая премии команде за важные вехи после инвестиций.',
      ],
    },
  ];

  const monthlyReport = {
    message: `СнупДок · отчёт инвестору · Июль 2026

Ключевые показатели
🟡 Выручка: 420 тыс. ₽
🟢 Расходы: 390 тыс. ₽
🟢 Остаток денег: 890 тыс. ₽
🟡 Платящие клиенты: 4

Основные события и прогноз
🟢 Доделали внешний онбординг и шаблоны договоров.
🟡 Один клиент перешёл из пилота в оплату, ещё два близки к запуску.
🟢 Прогноз на следующий месяц — выйти на 5 платящих клиентов и закрыть вторую веху по продукту.

Фокус на следующий месяц
🔵 Добить коробочную версию.
🔵 Закрыть 5 платящих клиентов.
🔵 Протестировать первый заход в смежный сегмент.`,
  };

  return (
    <div className="min-h-screen bg-[#f3f5f8] text-[#101828]">
      {/* HEADER — один заголовок */}
      <section className="px-6 pt-10 pb-6 md:px-10 md:pt-14">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-[#101828] md:text-4xl">
            Инвестиционное предложение · <span className="text-[#2f76ff]">СнупДок</span>
          </h1>
          <p className="mt-3 text-base text-[#667085] md:text-lg">
            Март — Декабрь 2026 · Россия · SaaS-подписка + ПЭП по транзакции
          </p>
        </div>
      </section>

      {/* МЕТРИКИ */}
      <section className="px-6 py-6 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-5">
          {topMetrics.map((item) => (
            <div key={item.label} className="rounded-2xl border border-[#d8dee8] bg-[#f7f8fa] px-5 py-5 text-center shadow-[0_2px_8px_rgba(16,24,40,0.03)]">
              <div className="text-xl font-semibold tracking-tight text-[#2f76ff]">{item.value}</div>
              <div className="mt-1.5 text-sm text-[#667085]">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* РЕЗЮМЕ */}
      <section className="px-6 pb-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-semibold tracking-tight text-[#101828] md:text-3xl">1. Резюме</h2>
          <div className="mt-8 grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="leading-none">
                <span className="text-4xl font-bold tracking-tight text-[#2f76ff] md:text-5xl">Снуп</span>
                <span className="text-4xl font-bold tracking-tight text-[#101828] md:text-5xl">Док</span>
              </div>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#475467] md:text-lg">
                Быстрый документооборот для контент-продакшна. Формируйте договоры с командой в несколько кликов,
                подписывайте по СМС, храните и систематизируйте — всё в одном сервисе.
              </p>
              <p className="mt-3 text-sm text-[#667085] md:text-base">
                Отраслевые шаблоны, подписание на площадке, учёт РИД.
              </p>
              <div className="mt-5 inline-flex items-center gap-2 text-base font-medium text-[#2f76ff]">
                snoop-doc.ru <span>→</span>
              </div>
            </div>

            <div className="rounded-2xl border border-[#d8dee8] bg-[#f7f8fa] p-5 shadow-[0_6px_20px_rgba(16,24,40,0.04)]">
              <div className="mb-3 flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-[#1d2939]">
                Документы — статусы подписания
              </h3>
              <div className="mt-4 space-y-3 border-t border-[#e4e7ec] pt-4 text-sm">
                <div className="flex items-center justify-between gap-4 border-b border-[#eef1f5] pb-3">
                  <div><span className="font-semibold">СЗ Черепицина</span> — Режиссёр</div>
                  <span className="rounded-xl bg-[#ccefd6] px-3 py-1 text-xs font-medium text-[#169c41]">Подписан</span>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-[#eef1f5] pb-3">
                  <div><span className="font-semibold">ИП Шавкерин</span> — Оператор</div>
                  <span className="rounded-xl bg-[#f7e9a6] px-3 py-1 text-xs font-medium text-[#a87400]">На подписи</span>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-[#eef1f5] pb-3">
                  <div><span className="font-semibold">ИП Киселев</span> — Колорист</div>
                  <span className="rounded-xl bg-[#f7e9a6] px-3 py-1 text-xs font-medium text-[#a87400]">На подписи</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div><span className="font-semibold">СЗ Петров</span> — Звукорежиссёр</div>
                  <span className="rounded-xl bg-[#ccefd6] px-3 py-1 text-xs font-medium text-[#169c41]">Подписан</span>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#c9ced6]" />
                <span className="h-2 w-2 rounded-full bg-[#c9ced6]" />
                <span className="h-2 w-2 rounded-full bg-[#2f76ff]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* СЦЕНАРИИ */}
      <section className="px-6 py-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-sm font-medium uppercase tracking-widest text-[#2f76ff]">Финансовая логика</div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#0f172a] md:text-3xl">
            Опираемся на консервативный сценарий
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#667085] md:text-base">
            Без агрессивного маркетинга, с ростом через прямые продажи, нетворкинг и первые внедрения.
          </p>

          <div className="mt-8 grid items-end gap-4 lg:grid-cols-[0.82fr_1fr_0.82fr]">
            {scenarios.map((scenario) => (
              <div
                key={scenario.name}
                className={
                  scenario.featured
                    ? 'rounded-2xl border border-[#d2d9e6] bg-[#eef3fb] p-6 shadow-[0_10px_28px_rgba(16,24,40,0.08)]'
                    : 'rounded-2xl border border-[#d9dfe8] bg-[#f7f8fa] p-5 shadow-[0_6px_18px_rgba(16,24,40,0.04)] opacity-95 lg:scale-[0.94]'
                }
              >
                <div className="text-xs font-medium uppercase tracking-wider text-[#2f76ff]">{scenario.name}</div>
                <h3 className={scenario.featured ? 'mt-1.5 text-2xl font-semibold text-[#0f172a]' : 'mt-1.5 text-xl font-semibold text-[#0f172a]'}>
                  {scenario.short}
                </h3>
                <div className="mt-4 space-y-2.5">
                  <div className="rounded-xl border border-[#d8dee8] bg-white p-3.5 shadow-sm">
                    <div className="text-xs text-[#667085]">К декабрю 2026</div>
                    <div className={scenario.featured ? 'mt-1 text-xl font-semibold text-[#0f172a]' : 'mt-1 text-lg font-semibold text-[#0f172a]'}>{scenario.clients}</div>
                  </div>
                  <div className="rounded-xl border border-[#d8dee8] bg-white p-3.5 shadow-sm">
                    <div className="text-xs text-[#667085]">Выручка за март–декабрь 2026</div>
                    <div className={scenario.featured ? 'mt-1 text-xl font-semibold text-[#0f172a]' : 'mt-1 text-lg font-semibold text-[#0f172a]'}>{scenario.revenue}</div>
                  </div>
                  <div className="rounded-xl border border-[#d8dee8] bg-white p-3.5 shadow-sm">
                    <div className="text-xs text-[#667085]">Ежемесячная выручка в декабре</div>
                    <div className={scenario.featured ? 'mt-1 text-xl font-semibold text-[#0f172a]' : 'mt-1 text-lg font-semibold text-[#0f172a]'}>{scenario.monthly}</div>
                  </div>
                  <div className="rounded-xl border border-[#d8dee8] bg-white p-3.5 shadow-sm">
                    <div className="text-xs text-[#667085]">Безубыточность</div>
                    <div className={scenario.featured ? 'mt-1 text-xl font-semibold text-[#0f172a]' : 'mt-1 text-lg font-semibold text-[#0f172a]'}>{scenario.breakeven}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5 max-w-5xl text-sm leading-relaxed text-[#667085]">
            Консервативный сценарий выбран как основной для инвестпредложения. Негативный показывает нижнюю границу риска: даже в нём проект выходит на безубыточность до конца 2026 года. Позитивный показывает верхнюю границу потенциала при выходе на ивенты и другие смежные проектные рынки.
          </p>
        </div>
      </section>

      {/* ГРАФИК 3 ГОДА */}
      <section className="px-6 py-6 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-sm font-medium uppercase tracking-widest text-[#2f76ff]">Перспектива на 3 года</div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#0f172a] md:text-3xl">
            Выручка, расходы и прибыль на горизонте трёх лет
          </h2>
          <div className="mt-6 rounded-2xl border border-[#d8dee8] bg-[#f7f8fa] p-5 md:p-7 shadow-[0_6px_18px_rgba(16,24,40,0.04)]">
            <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-[#475467]">
              <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-[#2f76ff]" />Выручка</div>
              <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-[#f04444]" />Расходы</div>
              <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-[#2bbf5f]" />Прибыль</div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-6 px-2 md:px-8">
              {horizon.map((item) => {
                const max = 35;
                const barMaxH = 280;
                const blueH = Math.max((item.revenue / max) * barMaxH, 36);
                const redH = Math.max((item.costs / max) * barMaxH, 36);
                const greenH = Math.max((Math.abs(item.profit) / max) * barMaxH, 14);
                return (
                  <div key={item.year}>
                    <div className="grid grid-cols-3 items-end gap-2 md:gap-3" style={{ height: `${barMaxH + 32}px` }}>
                      {/* Выручка */}
                      <div className="flex h-full flex-col items-center justify-end">
                        <div className="mb-1.5 text-sm font-semibold text-[#344054]">+{item.revenue}</div>
                        <div className="w-full rounded-t-xl bg-[#2f76ff]" style={{ height: `${blueH}px` }} />
                      </div>
                      {/* Расходы */}
                      <div className="flex h-full flex-col items-center justify-end">
                        <div className="mb-1.5 text-sm font-semibold text-[#344054]">+{item.costs}</div>
                        <div className="w-full rounded-t-xl bg-[#f04444]" style={{ height: `${redH}px` }} />
                      </div>
                      {/* Прибыль */}
                      {item.profit >= 0 ? (
                        <div className="flex h-full flex-col items-center justify-end">
                          <div className="mb-1.5 text-sm font-semibold text-[#344054]">+{item.profit}</div>
                          <div className="w-full rounded-t-xl bg-[#2bbf5f]" style={{ height: `${greenH}px` }} />
                        </div>
                      ) : (
                        <div className="flex h-full flex-col items-center justify-end">
                          <div className="w-full rounded-b-xl bg-[#2bbf5f]" style={{ height: `${greenH}px` }} />
                          <div className="mt-1.5 text-sm font-semibold text-[#344054]">{item.profit}</div>
                        </div>
                      )}
                    </div>
                    <div className="mt-3 text-center text-base font-semibold text-[#344054]">{item.year}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ДЛЯ КОГО + ИНВЕСТПРЕДЛОЖЕНИЕ */}
      <section className="px-6 py-6 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-2xl border border-[#d8dee8] bg-[#f7f8fa] p-6 shadow-[0_6px_18px_rgba(16,24,40,0.04)]">
            <div className="text-sm font-medium uppercase tracking-widest text-[#2f76ff]">Для кого</div>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-[#0f172a]">Сначала контент-продакшн, потом смежные рынки</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#667085] md:text-base">
              Первый сегмент — малый видеопродакшн и студии графики. Дальше продукт можно расширять на ивент-агентства и другие проектные агентские бизнесы, где много подрядчиков, подписаний и повторяющегося документооборота.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {audience.map((item) => (
                <span key={item} className="rounded-full border border-[#cfe0ff] bg-[#eef5ff] px-3 py-1 text-sm text-[#2f76ff]">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#2f76ff] bg-[#2f76ff] p-6 text-white shadow-[0_14px_36px_rgba(47,118,255,0.22)]">
            <div className="inline-flex rounded-full bg-red-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
              Инвестпредложение
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">1,5 млн ₽ за 10% компании</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/85 md:text-base">
              Сделка разбита на два этапа, чтобы снизить риск и для инвестора, и для проекта.
            </p>
            <div className="mt-5 space-y-3">
              <div className="rounded-xl border border-white/20 bg-white/10 p-4">
                <div className="text-xs text-white/65">Первый транш</div>
                <div className="mt-1 text-lg font-semibold">750 000 ₽ за 5%</div>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/10 p-4">
                <div className="text-xs text-white/65">Второй транш</div>
                <div className="mt-1 text-lg font-semibold">750 000 ₽ за ещё 5%</div>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  После того как продукт доведён до внешней версии и появились 5 внешних платящих клиентов.
                </p>
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-white/20 bg-white/10 p-4 text-sm leading-relaxed text-white/90">
              Если второй транш не происходит, у инвестора остаются только первые 5%. Возврат первого платежа не нужен.
            </div>
            <div className="mt-4 rounded-xl border border-white/20 bg-white/10 p-4">
              <div className="text-xs text-white/65">Как оформляем долю</div>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-white/90">
                <p><span className="font-semibold">Вариант 1.</span> Сразу открываем ООО с долями 90% / 10%, инвестор входит в состав участников в марте. Нужны нотариально заверенные документы, которые отдельно фиксируют: второй транш, конвертацию оставшейся части сделки в долю либо право на возврат / обратный выкуп части доли при невыполнении условий.</p>
                <p><span className="font-semibold">Вариант 2.</span> До июня действует инвестиционное соглашение, а оформление 10% доли происходит в июне, когда основатель приезжает в Россию.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ОТЧЁТНОСТЬ */}
      <section className="px-6 py-6 pb-12 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_1fr]">
          {reportBlocks.map((block) => (
            <div key={block.title} className="rounded-2xl border border-[#d8dee8] bg-[#f7f8fa] p-6 shadow-[0_6px_18px_rgba(16,24,40,0.04)]">
              <div className="text-sm font-medium uppercase tracking-widest text-[#2f76ff]">{block.title}</div>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#667085] md:text-base">
                {block.points.map((point) => (
                  <p key={point}>{point}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-6 max-w-7xl rounded-2xl border border-[#d8dee8] bg-[#f7f8fa] p-6 shadow-[0_6px_18px_rgba(16,24,40,0.04)]">
          <div className="text-sm font-medium uppercase tracking-widest text-[#2f76ff]">Формат ежемесячной отчётности</div>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-[#0f172a]">Пример сообщения в Telegram</h2>

          <div className="mt-6 flex justify-center">
            <div className="w-full max-w-xl rounded-2xl border border-[#d8dee8] bg-[#e9eef5] p-3 shadow-[0_10px_28px_rgba(16,24,40,0.08)]">
              <div className="rounded-xl border border-[#cfd8e3] bg-white shadow-sm overflow-hidden">
                <div className="flex items-center justify-between border-b border-[#e4e7ec] bg-[#f7f8fa] px-4 py-3">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-full bg-[#2f76ff] flex items-center justify-center text-white text-sm font-semibold">С</div>
                    <div>
                      <div className="text-sm font-semibold text-[#101828]">СнупДок · инвестор</div>
                      <div className="text-xs text-[#667085]">сегодня в 18:42</div>
                    </div>
                  </div>
                  <div className="text-[#98a2b3]">⋯</div>
                </div>

                <div className="bg-[#d9ecff] p-4">
                  <div className="max-w-[88%] rounded-2xl rounded-tl-md bg-white px-4 py-3 text-sm leading-7 text-[#101828] shadow-sm whitespace-pre-line">
                    {monthlyReport.message}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-[#667085]">
            Важная оговорка: основатель вправе распределять бюджет в интересах проекта, включая премии команде за достигнутые вехи после привлечения инвестиций. Из первого раунда премии основателю не выплачиваются.
          </p>
        </div>
      </section>
    </div>
  );
}
